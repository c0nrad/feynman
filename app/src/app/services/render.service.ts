import { Injectable } from '@angular/core';
import { fabric } from 'fabric'
import { Interaction } from '../../../../lib/interaction';
import { Point, Line } from '../../../../lib/line'
import TeXToSVG from 'tex-to-svg'
import { BehaviorSubject } from 'rxjs';
import { InteractionService } from './interaction.service';


@Injectable({
  providedIn: 'root'
})
export class RenderService {
  canvas: fabric.Canvas
  gridSpacing: number
  interaction?: Interaction

  selected$: BehaviorSubject<Line>
  selectedFabric?: fabric.Object

  emptyLine: Line = new Line(-1, -1, -1, -1, "PHOTON")

  constructor(private interactionService: InteractionService) {
    this.gridSpacing = 75
    this.canvas = new fabric.Canvas(null)
    this.selected$ = new BehaviorSubject<Line>(this.emptyLine)
  }

  initCanvas() {
    this.canvas = new fabric.Canvas('editor-canvas', { selection: false });

    this.canvas.on("mouse:down", (event) => {
      if (event.target) {
        //@ts-ignore
        let line = event.target.get("line")

        if (line) {
          // @ts-ignore
          event.target.set("selected", true)
          this.selectedFabric = event.target
          this.selected$.next(line)
          this.clearSelected()
          this.drawSelected()
        }
      } else {
        this.selectedFabric = undefined
        this.selected$.next(this.emptyLine)
        this.clearSelected()
      }
    })

    this.canvas.on("object:moving", (event) => {
      //@ts-ignore
      if (event.target && (event.target.get("classification") == "selected_a" || event.target.get("classification") == "selected_b")) {
        if (event.target.left && event.target.top) {
          event.target.set({
            left: Math.round(event.target.left / this.gridSpacing) * this.gridSpacing,
            top: Math.round(event.target.top / this.gridSpacing) * this.gridSpacing
          })

          let oldLine = this.selected$.value.clone()
          let line = this.selected$.value.clone()

          // @ts-ignore
          if (event.target.get("classification") == "selected_a") {
            //@ts-ignore  
            this.selectedFabric?.set({ "x1": event.target.left, "y1": event.target.top })
            line.a.X = this.fromX(event.target.left)
            line.a.Y = this.fromY(event.target.top)
          } else {
            //@ts-ignore  
            this.selectedFabric?.set({ "x2": event.target.left, "y2": event.target.top })
            line.b.X = this.fromX(event.target.left)
            line.b.Y = this.fromY(event.target.top)
          }
          this.selectedFabric?.setCoords()
          this.selectedFabric?.set('dirty', true)

          this.clearArrow(oldLine)
          this.canvas.add(this.renderArrow(line))

          this.clearSymbol(oldLine)
          this.drawSymbol(line)

          this.interaction = this.interactionService.update(oldLine, line)
          this.selected$.next(line)
        }
      }
    })

    this.canvas.on('mouse:over', (e) => {
      if (e.target) {
        // @ts-ignore
        if (e.target.get('classification') == "line") {

          //@ts-ignore
          e.target.set('originalFill', e.target.get('fill'))
          // @ts-ignore
          e.target.set('originalStroke', e.target.get('stroke'))

          e.target.set('fill', 'red');
          e.target.set('stroke', 'blue')

        }
        this.canvas.renderAll();
      }
    });

    this.canvas.on('mouse:out', (e) => {
      if (e.target) {
        //@ts-ignore 
        if (e.target.get('classification') == 'line') {

          // @ts-ignore
          e.target.set('fill', e.target?.get('originalFill'));
          // @ts-ignore
          e.target.set('stroke', e.target?.get('originalStroke'));
          this.canvas.renderAll();
        }
      }
    });
  }

  drawGrid() {
    let size = this.canvas.getWidth()
    if (size < this.canvas.getHeight()) {
      size = this.canvas.getHeight();
    }

    for (let x = this.gridSpacing; x < window.innerWidth; x += this.gridSpacing) {
      for (let y = this.gridSpacing; y < window.innerHeight; y += this.gridSpacing) {
        var circle = new fabric.Circle({ radius: 1, fill: 'gray', left: x, top: y, selectable: false })
        this.canvas.add(circle);
      }
    }
  }

  x(x: number) {
    return x * this.gridSpacing
  }
  y(y: number) {
    return y * this.gridSpacing
  }

  fromX(xPos: number): number {
    return Math.round(xPos / this.gridSpacing)
  }

  fromY(yPos: number): number {
    return Math.round(yPos / this.gridSpacing)
  }

  drawInteraction(interaction: Interaction) {
    if (this.interaction && this.interaction.equals(interaction)) {
      return
    }
    for (let l of interaction.lines) {

      let line: fabric.Object = {} as fabric.Object
      if (l.particle.id == "PHOTON") {
        line = this.renderPhoton(l)
      } else if (l.particle.id == "W_MINUS" || l.particle.id == "W_PLUS" || l.particle.id == "Z") {
        line = this.renderWeak(l)
      } else if (l.particle.id == "GLUON") {
        line = this.renderGluon(l)
      } else {
        line = new fabric.Line([this.x(l.a.X), this.y(l.a.Y), this.x(l.b.X), this.y(l.b.Y)], { stroke: 'black' })

        this.canvas.add(this.renderArrow(l))
      }

      line.hasControls = false
      line.hasBorders = false
      line.selectable = false
      line.lockMovementY = true
      line.lockMovementX = true
      line.hoverCursor = "pointer"

      // @ts-ignore
      line.set({ "line": l, "classification": "line" })
      this.canvas.add(line)

      this.drawSymbol(l)
    }
    this.interaction = interaction
  }

  drawSelected() {
    let radius = 10

    let selected = this.selected$.value
    if (selected.a.X == -1) {
      console.log("no object selected")
      return
    }

    var aCircle = new fabric.Circle({
      radius: radius, fill: 'red', left: this.x(selected.a.X), top: this.y(selected.a.Y),
      selectable: true, originX: "center", originY: "center", hasControls: false, hasBorders: false
    })
    //@ts-ignore
    aCircle.set("classification", "selected_a")
    this.canvas.add(aCircle);

    var bCircle = new fabric.Circle({
      radius: radius, fill: 'red', left: this.x(selected.b.X), top: this.y(selected.b.Y), selectable: true,
      originX: "center", originY: "center", hasControls: false, hasBorders: false
    })
    //@ts-ignore
    bCircle.set({ "classification": "selected_b" })
    this.canvas.add(bCircle);
  }

  clearSelected() {
    for (let o of this.canvas.getObjects()) {

      //@ts-ignore
      if (o.get("selected")) {
        // @ts-ignore
        o.set({ "selected": false })
      }

      // @ts-ignore
      if (o.get("classification") && o.get("classification") == "selected_a" || o.get("classification") == "selected_b") {
        this.canvas.remove(o)
      }
    }
  }


  clear() {
    this.canvas.clear()
  }

  resize(width: number, height: number) {
    this.canvas.setWidth(width);
    this.canvas.setHeight(height);
    this.canvas.calcOffset();
  }

  drawSymbol(line: Line) {
    let midpoint = line.midpoint()

    let left = this.x(midpoint.X);
    let top = this.y(midpoint.Y) + 20;

    // straight up and down
    if (line.isVertical()) {
      left = this.x(midpoint.X) + 20;
      top = this.y(midpoint.Y);
    }

    if (line.particle.latex == "") {
      let t = new fabric.Text(line.particle.id, {
        fontSize: 15,
        left: left,
        top: top,
        originX: "center",
        originY: "center"
      });
      t.hasControls = false
      this.canvas.add(t)
    } else {
      fabric.loadSVGFromString(TeXToSVG(line.particle.latex), (objects, options) => {
        var obj = fabric.util.groupSVGElements(objects, options);
        // @ts-ignore
        obj.set({ "originX": "center", "originY": "center", left: left, top: top, hasControls: false, selectable: false, classification: "symbol", "line": line })
        // @ts-ignore
        if (obj.width > obj.height) {
          obj.scaleToWidth(15)
        } else {
          obj.scaleToHeight(15)
        }
        this.canvas.add(obj);
      });
    }
  }

  clearSymbol(line: Line) {
    for (let o of this.canvas.getObjects()) {
      //@ts-ignore
      if (o.get("classification") == "symbol" && o.get("line").id == line.id) {
        this.canvas.remove(o)
      }
    }
  }

  renderPhoton(line: Line): fabric.Object {
    let points = [];
    let amplitude = 20;
    let wavelength = 8;

    let length = line.left().distance(line.right())

    for (let i = 0; i < this.x(length) + 2; i += 1) {
      points.push({ x: i, y: amplitude * Math.cos(i / wavelength + Math.PI / 2) })
    }

    let pLine = new fabric.Polyline(points, {
      stroke: "red", top:
        this.y(line.left().Y) - amplitude, left: this.x(line.left().X), fill: ''
    })

    return pLine
  }

  renderWeak(line: Line): fabric.Object {
    let points = [];
    let amplitude = 10;
    let wavelength = 8;

    let length = line.left().distance(line.right())

    let positive = 1
    points.push({ x: 0, y: 0 })
    for (let i = wavelength / 2; i < this.x(length); i += wavelength) {
      points.push({ x: i, y: amplitude * positive })
      positive *= -1
    }
    points.push({ x: this.x(length), y: 0 })

    let pLine = new fabric.Polyline(points, {
      stroke: "red", top:
        this.y(line.left().Y), left: this.x(line.left().X), fill: '',
      originX: "left", originY: "center",
    })
    pLine.centeredRotation = false
    pLine.rotate(line.angle())

    return pLine
  }

  renderGluon(line: Line): fabric.Object {
    let points = [];
    let amplitude = 10;
    let wavelength = 3;

    let length = line.left().distance(line.right())

    points.push({ x: 0, y: 0 })
    for (let i = 0; i < this.x(length) + 2; i += 1) {
      if (i + 10 * Math.sin(i / (wavelength)) >= this.x(length)) {
        break
      }
      points.push({
        x: (i + 10 * Math.sin(i / (wavelength))), y: amplitude * (Math.cos(i / wavelength))
      })
    }
    points.push({ x: this.x(length), y: 0 })

    let pLine = new fabric.Polyline(points, {
      stroke: "red", top:
        this.y(line.left().Y), left: this.x(line.left().X), fill: '',
      originX: "left", originY: "center",
    })
    pLine.centeredRotation = false
    pLine.rotate(line.angle())
    return pLine
  }


  renderArrow(line: Line): fabric.Object {
    let midpoint = line.midpoint()
    let size = 15

    let t = new fabric.Triangle({ originX: "center", originY: "center", height: size, width: size * .8, top: this.y(midpoint.Y), left: this.x(midpoint.X) })
    if (line.particle.isAnti()) {
      t.rotate(+180 - line.angle())
    } else {
      t.rotate(line.angle() + 90)
    }

    //@ts-ignore
    t.set({ "classification": "arrow", "line": line })
    return t
  }

  clearArrow(line: Line) {
    for (let o of this.canvas.getObjects()) {
      //@ts-ignore
      if (o.get("classification") == "arrow" && o.get("line").id == line.id) {
        this.canvas.remove(o)
      }
    }
  }
}


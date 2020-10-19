import { Injectable } from '@angular/core';
import { fabric } from 'fabric'

@Injectable({
  providedIn: 'root'
})
export class RenderService {
  canvas: fabric.Canvas

  gridSpacing: number

  constructor() {
    this.gridSpacing = 50
    this.canvas = new fabric.Canvas(null)
  }

  initCanvas() {
    this.canvas = new fabric.Canvas('editor-canvas', { selection: false });
  }

  renderGrid() {
    let size = this.canvas.getWidth()
    if (size < this.canvas.getHeight()) {
      size = this.canvas.getHeight();
    }

    for (let x = this.gridSpacing; x < window.innerWidth; x += this.gridSpacing) {
      for (let y = this.gridSpacing; y < window.innerHeight; y += this.gridSpacing) {
        var circle = new fabric.Circle({ radius: 1, fill: 'gray', left: x, top: y })
        this.canvas.add(circle);
      }
    }
  }

  resize(width: number, height: number) {
    this.canvas.setWidth(width);
    this.canvas.setHeight(height);
    this.canvas.calcOffset();
  }
}

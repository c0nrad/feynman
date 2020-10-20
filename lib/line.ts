import { getParticleByID, Particle } from "./particle";
import { Vertex } from "./vertext";
import { v4 as uuidv4 } from 'uuid'

export class Point {
    X: number
    Y: number

    constructor(x: number, y: number) {
        this.X = x
        this.Y = y
    }

    equals(p: Point): boolean {
        return this.X == p.X && this.Y == p.Y
    }

    distance(p: Point): number {
        return Math.sqrt((this.X - p.X) * (this.X - p.X) + (this.Y - p.Y) * (this.Y - p.Y))
    }
}

export class Line {
    particle: Particle

    id: string
    a: Point
    b: Point

    constructor(x1: number, y1: number, x2: number, y2: number, particle: string) {
        this.id = uuidv4()
        this.a = new Point(x1, y1)
        this.b = new Point(x2, y2)
        this.particle = getParticleByID(particle)
    }

    left(): Point {
        if (this.a.X < this.b.X) {
            return this.a
        }
        return this.b
    }

    right(): Point {
        if (this.a.X < this.b.X) {
            return this.b
        }
        return this.a
    }

    top(): Point {
        if (this.a.Y > this.b.Y) {
            return this.b
        }
        return this.a
    }

    bottom(): Point {
        if (this.a.Y > this.b.Y) {
            return this.a
        }
        return this.b
    }

    midpoint(): Point {
        let x = ((this.right().X - this.left().X) / 2.0) + this.left().X
        let y = ((this.bottom().Y - this.top().Y) / 2.0) + this.top().Y
        return new Point(x, y)
    }

    angle(): number {
        let p1 = this.left()
        let p2 = this.right()

        return Math.atan2(p2.Y - p1.Y, p2.X - p1.X) * 180 / Math.PI;
    }

    isVertical(): boolean {
        return this.a.X == this.b.X
    }

    equals(other: Line): boolean {
        if (this.a.equals(other.a) && this.b.equals(other.b) && this.particle.id == other.particle.id) {
            return true
        }
        return false
    }

    clone(): Line {
        let out = new Line(this.a.X, this.a.Y, this.b.X, this.b.Y, this.particle.id)
        out.particle = this.particle.clone()
        out.id = this.id
        return out
    }
}


export function isLinesConnected(lines: Line[]) {
    if (lines.length == 0) {
        return true
    }

    let seen: Line[] = []
    let future = [lines[0]]


    while (future.length > 0) {
        let curr = future.pop() as Line

        if (seen.some(s => s.equals(curr))) {
            continue
        } else {
            future = future.concat(linesAt(curr.a, lines))
            future = future.concat(linesAt(curr.b, lines))
        }

        seen.push(curr)

    }

    return seen.length == lines.length
}

export function linesAt(p: Point, lines: Line[]): Line[] {
    let out = []
    for (let l of lines) {
        if (l.a.X == p.X && l.a.Y == p.Y) {
            out.push(l)
            continue
        }

        if (l.b.X == p.X && l.b.Y == p.Y) {
            out.push(l)
        }
    }
    return out
}

export function vertexAt(p: Point, lines: Line[]): Vertex {
    return new Vertex(p, linesAt(p, lines))
}

export function overlappingLines(lines: Line[]): Line[] {
    let out = []
    for (let i1 = 0; i1 < lines.length; i1++) {
        for (let i2 = i1 + 1; i2 < lines.length; i2++) {
            if ((lines[i1].a.equals(lines[i2].a) && lines[i1].b.equals(lines[i2].b)) ||
                lines[i1].b.equals(lines[i2].a) && lines[i1].a.equals(lines[i2].b)) {
                out.push(lines[i1])
            }
        }
    }
    return out
}
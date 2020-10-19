import { getParticleByID, Particle } from "./particle";
import { Vertex } from "./vertext";

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
}

export class Line {
    particle: Particle

    a: Point
    b: Point

    constructor(x1: number, y1: number, x2: number, y2: number, particle: string) {
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
        if (this.a.X > this.b.X) {
            return this.a
        }
        return this.b
    }

    equals(other: Line): boolean {
        if (this.a.equals(other.a) && this.b.equals(other.b) && this.particle.id == other.particle.id) {
            return true
        }
        return false
    }
}


export function isLinesConnected(lines: Line[]) {
    if (lines.length == 0) {
        return true
    }

    let seen: Line[] = []
    let future = [lines[0]]


    while (future.length > 0) {
        let curr = future.pop()

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
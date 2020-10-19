import { Line, Point } from "./line"

export class Vertex {
    position: Point

    lines: Line[]

    constructor(p: Point, l: Line[]) {
        this.position = p
        this.lines = l
    }


    hasParticle(pID: string): boolean {
        for (let l of this.lines) {
            if (l.particle.id == pID) {
                return true
            }
        }
        return false
    }
}


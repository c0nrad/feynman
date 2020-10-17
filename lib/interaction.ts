import { Line, Point, linesAt } from "./line";
import { getParticleByID } from "./particle";

export class Interaction {
    lines: Line[]
    name: string

    constructor(name: string, lines: Line[]) {
        this.name = name
        this.lines = lines
    }

    in(): Line[] {
        let out = []
        for (let l of this.lines) {
            if (this.at(l.a).length == 1 && l.left().equals(l.a)) {
                out.push(l)
            }

            if (this.at(l.b).length == 1 && l.left().equals(l.b)) {
                out.push(l)
            }
        }
        return out
    }

    out(): Line[] {
        let out = []
        for (let l of this.lines) {
            if (this.at(l.b).length == 1 && l.right().equals(l.b)) {
                out.push(l)
            }

            if (this.at(l.a).length == 1 && l.right().equals(l.a)) {
                out.push(l)
            }
        }
        return out
    }

    string(): string {
        return ""
    }

    vertexes(): Point[] {
        let out = []
        for (let l of this.lines) {
            if (!out.some(p => p.X == l.a.X && p.Y == l.a.Y)) {
                out.push(l.a)
            }

            if (!out.some(p => p.X == l.b.X && p.Y == l.b.Y)) {
                out.push(l.b)
            }
        }
        return out
    }

    at(p: Point): Line[] {
        return linesAt(p, this.lines)
    }

    clone(): Interaction {
        let out = new Interaction(this.name, [])
        for (let l of this.lines) {
            out.lines.push(new Line(l.a.X, l.a.Y, l.b.X, l.b.Y, l.particle.id))
        }
        return out
    }

    chargeIn(): number {
        let out = 0;
        for (let l of this.in()) {
            out += l.particle.charge3
        }
        return out
    }

    chargeOut(): number {
        let out = 0;
        for (let l of this.out()) {
            out += l.particle.charge3
        }
        return out
    }

    massOut(): number {
        let out = 0;
        for (let l of this.out()) {
            out += l.particle.mass
        }

        return out
    }

    baryonCountOut(): number {
        let out = 0;
        for (let l of this.out()) {
            out += l.particle.baryonCount
        }
        return out

    }

    baryonCountIn(): number {
        let out = 0;
        for (let l of this.in()) {
            out += l.particle.baryonCount
        }
        return out
    }

    leptonCountIn(generation: number): number {
        let out = 0;
        for (let l of this.in()) {
            if (l.particle.isLepton && l.particle.generation == generation) {
                out += l.particle.leptonCount
            }
        }
        return out
    }


    leptonCountOut(generation: number): number {
        let out = 0;
        for (let l of this.out()) {
            if (l.particle.isLepton && l.particle.generation == generation) {
                out += l.particle.leptonCount
            }
        }
        return out
    }
}

export function getInteractionByName(name: string): Interaction {
    return ExampleInteractions.find(i => i.name == name).clone()
}


var ExampleInteractions: Interaction[] = [
    new Interaction("Moller Scattering", [
        new Line(1, 1, 2, 2, "POSITRON"),
        new Line(1, 3, 2, 2, "ELECTRON"),
        new Line(2, 2, 4, 2, "PHOTON"),
        new Line(4, 2, 5, 1, "ELECTRON"),
        new Line(4, 2, 5, 3, "POSITRON")
    ])
]

export function ParseInteraction(interactionStr: string): Interaction {
    let inParticles = interactionStr.split("->")[0]
    let outParticles = interactionStr.split("->")[1]

    let lines = []
    let i = 0;
    for (let p of inParticles.split("+")) {
        p = p.trim()
        lines.push(new Line(0, i, 1, 1, p))
        i++
    }
    i = 0;
    for (let p of outParticles.split("+")) {
        p = p.trim()
        lines.push(new Line(1, 1, 2, i, p))
        i++
    }

    return new Interaction(interactionStr, lines)
}
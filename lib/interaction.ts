import { Line, Point, linesAt, vertexAt } from "./line";
import { getParticleByID } from "./particle";
import { Vertex } from "./vertext";

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

    points(): Point[] {
        let out: Point[] = []
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

    vertex(p: Point): Vertex {
        return vertexAt(p, this.lines)
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

    massIn(): number {
        let out = 0;
        for (let l of this.in()) {
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

    update(old: Line, current: Line) {
        for (let l of this.lines) {
            if (l.equals(old)) {
                l.a = current.a
                l.b = current.b
                l.particle = current.particle
                return
            }
        }
        throw new Error("could not find particle" + old + " " + current)
    }

    equals(interaction: Interaction): boolean {
        if (interaction.name != this.name) {
            return false
        }

        if (interaction.lines.length != this.lines.length) {
            return false
        }

        let usedIndex: number[] = []
        for (let l of interaction.lines) {
            let isFound = false
            for (let i = 0; i < this.lines.length; i++) {
                if (this.lines[i].equals(l) && usedIndex.indexOf(i) == -1) {
                    usedIndex.push(i)
                    isFound = true
                    break
                }
            }

            if (!isFound) {
                return false
            }
        }
        return true
    }

    equation(): string {
        let out = ""
        for (let l of this.in()) {
            out += l.particle.latex + " +"
        }
        out = out.substr(0, out.length - 2) + " \\implies "


        for (let l of this.out()) {
            out += l.particle.latex + " +"
        }
        out = out.substr(0, out.length - 2)
        return out
    }
}

export function getInteractionByName(name: string): Interaction {
    let interaction = ExampleInteractions.find(i => i.name == name)
    if (!interaction || interaction.name != name) {
        throw new Error("invalid interaction name: " + name)
    }

    return interaction.clone()
}

var ExampleInteractions: Interaction[] = [
    new Interaction("MOLLER_SCATTERING", [
        new Line(1, 1, 2, 2, "POSITRON"),
        new Line(1, 3, 2, 2, "ELECTRON"),
        new Line(2, 2, 4, 2, "PHOTON"),
        new Line(4, 2, 5, 1, "ELECTRON"),
        new Line(4, 2, 5, 3, "POSITRON")
    ]),

    new Interaction("MUON_DECAY", [
        new Line(1, 1, 2, 2, "MUON"),
        new Line(2, 2, 3, 1, "MUON_NEUTRINO"),
        new Line(2, 2, 3, 3, "W_MINUS"),
        new Line(3, 3, 4, 2, "ELECTRON"),
        new Line(3, 3, 4, 4, "ELECTRON_ANTINEUTRINO")
    ]),

    new Interaction("PION_EXCHANGE", [
        new Line(1, 1, 4, 2, "DOWN"),
        new Line(1, 2, 3, 3, "UP"),
        new Line(1, 3, 3, 4, "UP"),

        new Line(4, 2, 6, 1, "DOWN"),
        new Line(3, 3, 6, 2, "UP"),
        new Line(4, 4, 6, 3, "UP"),

        new Line(3, 4, 3, 6, "UP"),
        new Line(4, 4, 4, 6, "ANTI_UP"),

        new Line(3, 3, 3, 4, "GLUON"),
        new Line(4, 2, 4, 4, "GLUON"),

        //bottom
        new Line(1, 7, 4, 6, "UP"),
        new Line(1, 8, 4, 7, "UP"),
        new Line(1, 9, 3, 8, "DOWN"),

        new Line(3, 6, 6, 7, "DOWN"),
        new Line(4, 7, 6, 8, "UP"),
        new Line(3, 8, 6, 9, "UP"),

        new Line(3, 6, 3, 8, "GLUON"),
        new Line(4, 6, 4, 7, "GLUON"),
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
import * as mocha from 'mocha';
import * as chai from 'chai';
import { getParticleByID } from './particle';
import { getInteractionByName } from './interaction';
import { Point } from './line';

const expect = chai.expect;

describe("interaction", () => {
    it("vertexes()", () => {
        let ms = getInteractionByName("Moller Scattering").vertexes()
        expect(ms.length).to.equal(6)
    })

    it("in()", () => {
        let ms = getInteractionByName("Moller Scattering")
        expect(ms.in().length).to.equals(2)
        for (let l of ms.in()) {
            expect(l.right().equals(new Point(2, 2))).to.be.true
        }
        expect(ms.out().length).to.equals(2)
        for (let l of ms.out()) {
            expect(l.left().equals(new Point(4, 2))).to.be.true
        }
    })

    it("getInteractionByName clone()", () => {
        let ms = getInteractionByName("Moller Scattering")
        let old = ms.lines[0].a.X
        ms.lines[0].a.X = 100
        expect(getInteractionByName("Moller Scattering").lines[0].a.X).to.equals(old)
    })
})

import * as mocha from 'mocha';
import * as chai from 'chai';
import { getParticleByID } from './particle';

const expect = chai.expect;

describe("getParticleByName", () => {
    it("should return a particle by name", () => {
        let photon = getParticleByID("PHOTON")
        expect(photon.charge3).to.equal(0)
    })

    it("should return a copy", () => {
        let electron = getParticleByID("ELECTRON")
        electron.charge3 = 100
        expect(getParticleByID("ELECTRON").charge3).to.equal(-3)
    })

    it("should return an object", () => {
        expect(getParticleByID("ELECTRON").charge()).to.equal(-1)
    })
})

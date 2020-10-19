import * as mocha from 'mocha';
import * as chai from 'chai';
import { getParticleByID } from './particle';
import { validateInteraction, ValidationError } from './validation';
import { getInteractionByName, Interaction, ParseInteraction } from './interaction'
import { Line } from './line';

const expect = chai.expect;

function hasError(errors: ValidationError[], id: string): boolean {
    for (let e of errors) {
        if (e.id == id) {
            return true
        }
    }
    return false
}

describe("validation", () => {
    it("connected", () => {
        let i = new Interaction("not connected", [new Line(0, 0, 1, 1, "PHOTON"), new Line(2, 2, 3, 3, "PROTON")])
        let errs = validateInteraction(i)

        expect(hasError(errs, "NOT_CONNECTED")).to.be.true;
    })

    it("Moller Scattering valid", () => {
        let ms = getInteractionByName("Moller Scattering")
        let errs = validateInteraction(ms)
        expect(errs.length).to.equal(0);
    })

    it("ParseInteraction()", () => {
        let i1 = ParseInteraction("PROTON + ANTIPROTON -> PION_PLUS + PION")
        for (let l of i1.lines) {
            expect(l.particle.id).to.not.equal("")
        }
        expect(i1.in().length).to.equal(2);
        expect(i1.out().length).to.equal(2);
    })

    it("Giffiths 2.7 problems", () => {
        let i1 = ParseInteraction("PROTON + ANTIPROTON -> PION_PLUS + PION")
        expect(hasError(validateInteraction(i1), "CHARGE_CONSERVATION")).to.be.true;

        let i2 = ParseInteraction("ETA_MESON -> PHOTON + PHOTON")
        expect(hasError(validateInteraction(i2), "CHARGE_CONSERVATION")).to.be.false;

        let i3 = ParseInteraction("SIGMA -> LAMBDA + PION")
        expect(hasError(validateInteraction(i3), "ENERGY_CONSERVATION")).to.be.true;

        let i4 = ParseInteraction("SIGMA_MINUS -> NEUTRON + PION_MINUS")
        expect(hasError(validateInteraction(i4), "CHARGE_CONSERVATION")).to.be.false;
        expect(hasError(validateInteraction(i4), "BARYON_CONSERVATION")).to.be.false;
        expect(hasError(validateInteraction(i4), "ENERGY_CONSERVATION")).to.be.false;

        let i5 = ParseInteraction("MUON -> ELECTRON + ELECTRON_ANTINEUTRINO")
        expect(hasError(validateInteraction(i5), "LEPTON_MUON_CONSERVATION")).to.be.true;

        let i6 = ParseInteraction("ELECTRON + PROTON -> ELECTRON_NEUTRINO + PION")
        expect(hasError(validateInteraction(i6), "BARYON_CONSERVATION")).to.be.true;

        let i7 = ParseInteraction("PION_PLUS + NEUTRON -> PION_MINUS + PROTON")
        expect(hasError(validateInteraction(i7), "CHARGE_CONSERVATION")).to.be.true;

        let i8 = ParseInteraction("SIGMA_PLUS + NEUTRON -> SIGMA_MINUS + PROTON")
        expect(hasError(validateInteraction(i7), "CHARGE_CONSERVATION")).to.be.true;
    })

    it("check for overlapping lines", () => {
        let i = new Interaction("overlapping", [new Line(0, 0, 1, 1, "PHOTON"), new Line(0, 0, 1, 1, "PROTON")])
        let errs = validateInteraction(i)

        expect(hasError(errs, "OVERLAPPING_LINES")).to.be.true;
    })
})

import { Interaction } from "./interaction";
import { isLinesConnected, Line } from "./line";

export class ValidationError {
    id: string
    description: string

    lines: Line[]

    constructor(id: string, lines: Line[]) {
        let e = ErrorDescriptions.find(e => e.id == id)
        this.description = e.description
        this.id = id
        this.lines = lines
    }
}

var ErrorDescriptions = [
    { id: "NOT_CONNECTED", description: "All elements of the interaction need to be connected." },
    { id: "CHARGE_CONSERVATION", description: "Charge is not conserved." },
    { id: "BARYON_CONSERVATION", description: "Baryon count is not conserved" },
    { id: "ENERGY_CONSERVATION", description: "Single particle does not have enough mass" },

    { id: "LEPTON_ELECTRON_CONSERVATION", description: "Electron count is not conserved" },
    { id: "LEPTON_MUON_CONSERVATION", description: "Muon count is not conserved" },
    { id: "LEPTON_TAU_CONSERVATION", description: "Tau count is not conserved" },

    { id: "GLUON_LEPTON_INTERACTION", description: "Leptons do not experience strong force" },
    { id: "PHOTON_NEUTRAL_INTERACTION", description: "Neutral particles do not experience electromagnetic force" },


]

export function validateInteraction(interaction: Interaction): ValidationError[] {
    let out = []

    if (!isLinesConnected(interaction.lines)) {
        out.push(new ValidationError("NOT_CONNECTED", []))
    }

    if (interaction.chargeIn() != interaction.chargeOut()) {
        out.push(new ValidationError("CHARGE_CONSERVATION", []))
    }

    if (interaction.baryonCountIn() != interaction.baryonCountOut()) {
        out.push(new ValidationError("BARYON_CONSERVATION", []))
    }


    if (interaction.leptonCountIn(1) != interaction.leptonCountOut(1)) {
        out.push(new ValidationError("LEPTON_ELECTRON_CONSERVATION", []))
    }

    if (interaction.leptonCountIn(2) != interaction.leptonCountOut(2)) {
        out.push(new ValidationError("LEPTON_MUON_CONSERVATION", []))
    }

    if (interaction.leptonCountIn(3) != interaction.leptonCountOut(3)) {
        out.push(new ValidationError("LEPTON_TAU_CONSERVATION", []))
    }

    if (interaction.in().length == 1 && interaction.in()[0].particle.mass < interaction.massOut()) {
        out.push(new ValidationError("ENERGY_CONSERVATION", []))
    }

    return out
}

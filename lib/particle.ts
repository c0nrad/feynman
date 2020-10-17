import { plainToClass } from 'class-transformer';

export class Particle {
    id: string
    name: string
    anti: string

    mass: number
    generation: number

    charge3: number
    baryonCount: number
    leptonCount: number

    isLepton: boolean
    isBoson: boolean
    isQuark: boolean
    isBaryon: boolean
    isMeson: boolean
    isNeutrino: boolean

    contents: string[]

    additionalIds: string[]

    constructor(id: string, additionalIds: string[], name: string, anti: string, mass: number, generation: number,
        c3: number, b: number, isLepton: boolean, isBoson: boolean, isQuark: boolean,
        isBaryon: boolean, isMeson: boolean) {
    }

    charge(): number {
        return this.charge3 / 3;
    }
}

var Particles: Particle[] = plainToClass(Particle, [
    // Quarks
    {
        id: "UP", name: "Up Quark", anti: "ANTI_UP", mass: 3, generation: 1,
        charge3: 2, baryonCount: 0, isLepton: false, isBoson: false, isQuark: true,
        isBaryon: false, isMeson: false, isNeutrino: false, additionalIds: [], contents: []
    },
    {
        id: "ANTI_UP", name: "Up Antiquark", anti: "UP", mass: 3, generation: 1,
        charge3: -2, baryonCount: 0, isLepton: false, isBoson: false, isQuark: true,
        isBaryon: false, isMeson: false, isNeutrino: false, additionalIds: [], contents: []
    },
    {
        id: "DOWN", name: "Down Quark", anti: "ANTI_DOWN", mass: 7, generation: 1,
        charge3: -1, baryonCount: 0, isLepton: false, isBoson: false, isQuark: true,
        isBaryon: false, isMeson: false, isNeutrino: false, additionalIds: [], contents: []
    },
    {
        id: "ANTI_DOWN", name: "Down Antiquark", anti: "DOWN", mass: 7, generation: 1,
        charge3: 1, baryonCount: 0, isLepton: false, isBoson: false, isQuark: true,
        isBaryon: false, isMeson: false, isNeutrino: false, additionalIds: [], contents: []
    },
    {
        id: "CHARM", name: "Charm Quark", anti: "ANTI_CHARM", mass: 1200, generation: 2,
        charge3: 2, baryonCount: 0, isLepton: false, isBoson: false, isQuark: true,
        isBaryon: false, isMeson: false, isNeutrino: false, additionalIds: [], contents: []
    },
    {
        id: "ANTI_CHARM", name: "Charm Antiquark", anti: "CHARM", mass: 1200, generation: 2,
        charge3: -2, baryonCount: 0, isLepton: false, isBoson: false, isQuark: true,
        isBaryon: false, isMeson: false, isNeutrino: false, additionalIds: [], contents: []
    },
    {
        id: "STRANGE", name: "Strange Quark", anti: "ANTI_STRANGE", mass: 120, generation: 2,
        charge3: -1, baryonCount: 0, isLepton: false, isBoson: false, isQuark: true,
        isBaryon: false, isMeson: false, isNeutrino: false, additionalIds: [], contents: []
    },
    {
        id: "ANTI_STRANGE", name: "Strange Antiquark", anti: "STRANGE", mass: 120, generation: 2,
        charge3: 1, baryonCount: 0, isLepton: false, isBoson: false, isQuark: true,
        isBaryon: false, isMeson: false, isNeutrino: false, additionalIds: [], contents: []
    },
    {
        id: "TOP", name: "Top Quark", anti: "ANTI_TOP", mass: 174000, generation: 3,
        charge3: 2, baryonCount: 0, isLepton: false, isBoson: false, isQuark: true,
        isBaryon: false, isMeson: false, isNeutrino: false, additionalIds: [], contents: []
    },
    {
        id: "ANTI_TOP", name: "Top Antiquark", anti: "TOP", mass: 174000, generation: 3,
        charge3: -2, baryonCount: 0, isLepton: false, isBoson: false, isQuark: true,
        isBaryon: false, isMeson: false, isNeutrino: false, additionalIds: [], contents: []
    },
    {
        id: "BOTTOM", name: "Bottom Quark", anti: "ANTI_BOTTOM", mass: 4300, generation: 3,
        charge3: -1, baryonCount: 0, isLepton: false, isBoson: false, isQuark: true,
        isBaryon: false, isMeson: false, isNeutrino: false, additionalIds: [], contents: []
    },
    {
        id: "ANTI_BOTTOM", name: "Bottom Antiquark", anti: "BOTTOM", mass: 4300, generation: 3,
        charge3: 1, baryonCount: 0, isLepton: false, isBoson: false, isQuark: true,
        isBaryon: false, isMeson: false, isNeutrino: false, additionalIds: [], contents: []
    },

    // Leptons 
    {
        id: "ELECTRON", name: "Electron", anti: "POSITRON", mass: .51099, generation: 1,
        charge3: -3, baryonCount: 0, leptonCount: 1, isLepton: true, isBoson: false, isQuark: false,
        isBaryon: false, isMeson: false, isNeutrino: false, additionalIds: [], contents: []
    },
    {
        id: "POSITRON", name: "Positron", anti: "ELECTRON", mass: .51099, generation: 1,
        charge3: 3, baryonCount: 0, leptonCount: -1, isLepton: true, isBoson: false, isQuark: false,
        isBaryon: false, isMeson: false, isNeutrino: false, additionalIds: [], contents: []
    },
    {
        id: "MUON", name: "Muon", anti: "ANTIMUON", mass: 105.659, generation: 2,
        charge3: -3, baryonCount: 0, leptonCount: 1, isLepton: true, isBoson: false, isQuark: false,
        isBaryon: false, isMeson: false, isNeutrino: false, additionalIds: [], contents: []
    },
    {
        id: "ANTIMUON", name: "Antimuon", anti: "MUON", mass: 105.659, generation: 2,
        charge3: 3, baryonCount: 0, leptonCount: -1, isLepton: true, isBoson: false, isQuark: false,
        isBaryon: false, isMeson: false, isNeutrino: false, additionalIds: [], contents: []
    },
    {
        id: "TAU", name: "Tau", anti: "ANTITAU", mass: 1776.99, generation: 3,
        charge3: -3, baryonCount: 0, leptonCount: 1, isLepton: true, isBoson: false, isQuark: false,
        isBaryon: false, isMeson: false, isNeutrino: false, additionalIds: [], contents: []
    },
    {
        id: "ANTITAU", name: "Antitau", anti: "TAU", mass: 1776.99, generation: 3,
        charge3: 3, baryonCount: 0, leptonCount: -1, isLepton: true, isBoson: false, isQuark: false,
        isBaryon: false, isMeson: false, isNeutrino: false, additionalIds: [], contents: []
    },

    // Neutrinos
    {
        id: "ELECTRON_NEUTRINO", name: "Electron Neutrino", anti: "ELECTRON_ANTINEUTRINO", mass: 0, generation: 1,
        charge3: 0, baryonCount: 0, leptonCount: 1, isLepton: true, isBoson: false, isQuark: false,
        isBaryon: false, isMeson: false, isNeutrino: true, additionalIds: [], contents: []
    },
    {
        id: "ELECTRON_ANTINEUTRINO", name: "Electron Antineutrino", anti: "ELECTRON_NEUTRINO", mass: 0, generation: 1,
        charge3: 0, baryonCount: 0, leptonCount: -1, isLepton: true, isBoson: false, isQuark: false,
        isBaryon: false, isMeson: false, isNeutrino: true, additionalIds: [], contents: []
    },
    {
        id: "MUON_NEUTRINO", name: "Muon Neutrino", anti: "MUON_ANTINEUTRINO", mass: 0, generation: 2,
        charge3: 0, baryonCount: 0, leptonCount: 1, isLepton: true, isBoson: false, isQuark: false,
        isBaryon: false, isMeson: false, isNeutrino: true, additionalIds: [], contents: []
    },
    {
        id: "MUON_ANTINEUTRINO", name: "Muon Antineutrino", anti: "MUON_NEUTRINO", mass: 0, generation: 2,
        charge3: 0, baryonCount: 0, leptonCount: -1, isLepton: true, isBoson: false, isQuark: false,
        isBaryon: false, isMeson: false, isNeutrino: true, additionalIds: [], contents: []
    },
    {
        id: "TAU_NEUTRINO", name: "Tau Neutrino", anti: "TAU_ANTINEUTRINO", mass: 0, generation: 3,
        charge3: 0, baryonCount: 0, leptonCount: 1, isLepton: true, isBoson: false, isQuark: false,
        isBaryon: false, isMeson: false, isNeutrino: true, additionalIds: [], contents: []
    },
    {
        id: "TAU_ANTINEUTRINO", name: "Tau Antineutrino", anti: "TAU_NEUTRINO", mass: 0, generation: 3,
        charge3: 0, baryonCount: 0, leptonCount: -1, isLepton: true, isBoson: false, isQuark: false,
        isBaryon: false, isMeson: false, isNeutrino: true, additionalIds: [], contents: []
    },

    // Bosons
    {
        id: "PHOTON", name: "Photon", anti: "PHOTON", mass: 0, generation: 0,
        charge3: 0, baryonCount: 0, isLepton: false, isBoson: true, isQuark: false,
        isBaryon: false, isMeson: false, isNeutrino: false, additionalIds: []
    },
    {
        id: "W_PLUS", name: "W+", anti: "W_MINUS", mass: 80420, generation: 0,
        charge3: 3, baryonCount: 0, isLepton: false, isBoson: true, isQuark: false,
        isBaryon: false, isMeson: false, isNeutrino: false, additionalIds: []
    },
    {
        id: "W_MINUS", name: "W-", anti: "W_PLUS", mass: 91190, generation: 0,
        charge3: -3, baryonCount: 0, isLepton: false, isBoson: true, isQuark: false,
        isBaryon: false, isMeson: false, isNeutrino: false, additionalIds: []
    },

    // 8xGluons

    // Baryons


    // Generated from ../scripts/particles.py
    // Eventually I should fix these
    { 'id': 'PROTON', 'anti': 'ANTIPROTON', 'name': 'proton', 'symbol': 'p,p+,N+', 'contents': 'uud', 'mass': 938.272046, 'charge3': 3, 'generation': 0, 'baryonCount': 1, 'isBaryon': true, 'additionalIds': [] },
    { 'id': 'ANTIPROTON', 'anti': 'PROTON', 'name': 'Antiproton', 'symbol': 'p,p+,N+', 'contents': 'uud', 'mass': 938.272046, 'charge3': -3, 'generation': 0, 'baryonCount': -1, 'isBaryon': true, 'additionalIds': [] },
    { 'id': 'NEUTRON', 'anti': 'ANTINEUTRON', 'name': 'neutron', 'symbol': 'n,n0,N0', 'contents': 'udd', 'mass': 939.565379, 'charge3': 0, 'generation': 0, 'baryonCount': 1, 'isBaryon': true, 'additionalIds': [] },
    { 'id': 'ANTINEUTRON', 'anti': 'NEUTRON', 'name': 'Antineutron', 'symbol': 'n,n0,N0', 'contents': 'udd', 'mass': 939.565379, 'charge3': 0, 'generation': 0, 'baryonCount': -1, 'isBaryon': true, 'additionalIds': [] },
    { 'id': 'LAMBDA', 'anti': 'ANTILAMBDA', 'name': 'lambda', 'symbol': 'Λ0', 'contents': 'uds', 'mass': 1115.683, 'charge3': 0, 'generation': 0, 'baryonCount': 1, 'isBaryon': true, 'additionalIds': [] },
    { 'id': 'ANTILAMBDA', 'anti': 'LAMBDA', 'name': 'Antilambda', 'symbol': 'Λ0', 'contents': 'uds', 'mass': 1115.683, 'charge3': 0, 'generation': 0, 'baryonCount': -1, 'isBaryon': true, 'additionalIds': [] },
    { 'id': 'CHARMED_LAMBDA_PLUS', 'anti': 'ANTICHARMED_LAMBDA_MINUS', 'name': 'charmed lambda Plus', 'symbol': 'Λ+c', 'contents': 'udc', 'mass': 2286.46, 'charge3': 3, 'generation': 0, 'baryonCount': 1, 'isBaryon': true, 'additionalIds': [] },
    { 'id': 'ANTICHARMED_LAMBDA_MINUS', 'anti': 'CHARMED_LAMBDA_PLUS', 'name': 'Anticharmed lambda Minus', 'symbol': 'Λ+c', 'contents': 'udc', 'mass': 2286.46, 'charge3': -3, 'generation': 0, 'baryonCount': -1, 'isBaryon': true, 'additionalIds': [] },
    { 'id': 'BOTTOM_LAMBDA', 'anti': 'ANTIBOTTOM_LAMBDA', 'name': 'bottom lambda', 'symbol': 'Λ0b', 'contents': 'udb', 'mass': 5619.4, 'charge3': 0, 'generation': 0, 'baryonCount': 1, 'isBaryon': true, 'additionalIds': [] },
    { 'id': 'ANTIBOTTOM_LAMBDA', 'anti': 'BOTTOM_LAMBDA', 'name': 'Antibottom lambda', 'symbol': 'Λ0b', 'contents': 'udb', 'mass': 5619.4, 'charge3': 0, 'generation': 0, 'baryonCount': -1, 'isBaryon': true, 'additionalIds': [] },
    { 'id': 'SIGMA_PLUS', 'anti': 'ANTISIGMA_MINUS', 'name': 'sigma Plus', 'symbol': 'Σ+', 'contents': 'uus', 'mass': 1189.37, 'charge3': 3, 'generation': 0, 'baryonCount': 1, 'isBaryon': true, 'additionalIds': [] },
    { 'id': 'ANTISIGMA_MINUS', 'anti': 'SIGMA_PLUS', 'name': 'Antisigma Minus', 'symbol': 'Σ+', 'contents': 'uus', 'mass': 1189.37, 'charge3': -3, 'generation': 0, 'baryonCount': -1, 'isBaryon': true, 'additionalIds': [] },
    { 'id': 'SIGMA', 'anti': 'ANTISIGMA', 'name': 'sigma', 'symbol': 'Σ0', 'contents': 'uds', 'mass': 1192.642, 'charge3': 0, 'generation': 0, 'baryonCount': 1, 'isBaryon': true, 'additionalIds': [] },
    { 'id': 'ANTISIGMA', 'anti': 'SIGMA', 'name': 'Antisigma', 'symbol': 'Σ0', 'contents': 'uds', 'mass': 1192.642, 'charge3': 0, 'generation': 0, 'baryonCount': -1, 'isBaryon': true, 'additionalIds': [] },
    { 'id': 'SIGMA_MINUS', 'anti': 'ANTISIGMA_PLUS', 'name': 'sigma Minus', 'symbol': 'Σ−', 'contents': 'dds', 'mass': 1197.449, 'charge3': -3, 'generation': 0, 'baryonCount': 1, 'isBaryon': true, 'additionalIds': [] },
    { 'id': 'ANTISIGMA_PLUS', 'anti': 'SIGMA_MINUS', 'name': 'Antisigma Minus', 'symbol': 'Σ−', 'contents': 'dds', 'mass': 1197.449, 'charge3': 3, 'generation': 0, 'baryonCount': -1, 'isBaryon': true, 'additionalIds': [] },
    { 'id': 'CHARMED_SIGMA_PLUS', 'anti': 'ANTICHARMED_SIGMA_MINUS', 'name': 'charmed sigma Plus', 'symbol': 'Σ++c', 'contents': 'uuc', 'mass': 2453.98, 'charge3': 6, 'generation': 0, 'baryonCount': 1, 'isBaryon': true, 'additionalIds': [] },
    { 'id': 'ANTICHARMED_SIGMA_MINUS', 'anti': 'CHARMED_SIGMA_PLUS', 'name': 'Anticharmed sigma Minus', 'symbol': 'Σ++c', 'contents': 'uuc', 'mass': 2453.98, 'charge3': -6, 'generation': 0, 'baryonCount': -1, 'isBaryon': true, 'additionalIds': [] },
    { 'id': 'CHARMED_SIGMA_PLUS', 'anti': 'ANTICHARMED_SIGMA_MINUS', 'name': 'charmed sigma Plus', 'symbol': 'Σ+c', 'contents': 'udc', 'mass': 2452.9, 'charge3': 3, 'generation': 0, 'baryonCount': 1, 'isBaryon': true, 'additionalIds': [] },
    { 'id': 'ANTICHARMED_SIGMA_MINUS', 'anti': 'CHARMED_SIGMA_PLUS', 'name': 'Anticharmed sigma Minus', 'symbol': 'Σ+c', 'contents': 'udc', 'mass': 2452.9, 'charge3': -3, 'generation': 0, 'baryonCount': -1, 'isBaryon': true, 'additionalIds': [] },
    { 'id': 'CHARMED_SIGMA', 'anti': 'ANTICHARMED_SIGMA', 'name': 'charmed sigma', 'symbol': 'Σ0c', 'contents': 'ddc', 'mass': 2453.74, 'charge3': 0, 'generation': 0, 'baryonCount': 1, 'isBaryon': true, 'additionalIds': [] },
    { 'id': 'ANTICHARMED_SIGMA', 'anti': 'CHARMED_SIGMA', 'name': 'Anticharmed sigma', 'symbol': 'Σ0c', 'contents': 'ddc', 'mass': 2453.74, 'charge3': 0, 'generation': 0, 'baryonCount': -1, 'isBaryon': true, 'additionalIds': [] },
    { 'id': 'BOTTOM_SIGMA_PLUS', 'anti': 'ANTIBOTTOM_SIGMA_MINUS', 'name': 'bottom sigma Plus', 'symbol': 'Σ+b', 'contents': 'uub', 'mass': 5811.3, 'charge3': 3, 'generation': 0, 'baryonCount': 1, 'isBaryon': true, 'additionalIds': [] },
    { 'id': 'ANTIBOTTOM_SIGMA_MINUS', 'anti': 'BOTTOM_SIGMA_PLUS', 'name': 'Antibottom sigma Minus', 'symbol': 'Σ+b', 'contents': 'uub', 'mass': 5811.3, 'charge3': -3, 'generation': 0, 'baryonCount': -1, 'isBaryon': true, 'additionalIds': [] },
    { 'id': 'BOTTOM_SIGMA_MINUS', 'anti': 'ANTIBOTTOM_SIGMA_PLUS', 'name': 'bottom sigma Minus', 'symbol': 'Σ−b', 'contents': 'ddb', 'mass': 5815.5, 'charge3': -3, 'generation': 0, 'baryonCount': 1, 'isBaryon': true, 'additionalIds': [] },
    { 'id': 'ANTIBOTTOM_SIGMA_PLUS', 'anti': 'BOTTOM_SIGMA_MINUS', 'name': 'Antibottom sigma Minus', 'symbol': 'Σ−b', 'contents': 'ddb', 'mass': 5815.5, 'charge3': 3, 'generation': 0, 'baryonCount': -1, 'isBaryon': true, 'additionalIds': [] },
    { 'id': 'XI', 'anti': 'ANTIXI', 'name': 'xi', 'symbol': 'Ξ0', 'contents': 'uss', 'mass': 1314.86, 'charge3': 0, 'generation': 0, 'baryonCount': 1, 'isBaryon': true, 'additionalIds': [] },
    { 'id': 'ANTIXI', 'anti': 'XI', 'name': 'Antixi', 'symbol': 'Ξ0', 'contents': 'uss', 'mass': 1314.86, 'charge3': 0, 'generation': 0, 'baryonCount': -1, 'isBaryon': true, 'additionalIds': [] },
    { 'id': 'XI_MINUS', 'anti': 'ANTIXI_PLUS', 'name': 'xi Minus', 'symbol': 'Ξ−', 'contents': 'dss', 'mass': 1321.71, 'charge3': -3, 'generation': 0, 'baryonCount': 1, 'isBaryon': true, 'additionalIds': [] },
    { 'id': 'ANTIXI_PLUS', 'anti': 'XI_MINUS', 'name': 'Antixi Minus', 'symbol': 'Ξ−', 'contents': 'dss', 'mass': 1321.71, 'charge3': 3, 'generation': 0, 'baryonCount': -1, 'isBaryon': true, 'additionalIds': [] },
    { 'id': 'CHARMED_XI_PLUS', 'anti': 'ANTICHARMED_XI_MINUS', 'name': 'charmed xi Plus', 'symbol': 'Ξ+c', 'contents': 'usc', 'mass': 2467.8, 'charge3': 3, 'generation': 0, 'baryonCount': 1, 'isBaryon': true, 'additionalIds': [] },
    { 'id': 'ANTICHARMED_XI_MINUS', 'anti': 'CHARMED_XI_PLUS', 'name': 'Anticharmed xi Minus', 'symbol': 'Ξ+c', 'contents': 'usc', 'mass': 2467.8, 'charge3': -3, 'generation': 0, 'baryonCount': -1, 'isBaryon': true, 'additionalIds': [] },
    { 'id': 'CHARMED_XI', 'anti': 'ANTICHARMED_XI', 'name': 'charmed xi', 'symbol': 'Ξ0c', 'contents': 'dsc', 'mass': 2470.88, 'charge3': 0, 'generation': 0, 'baryonCount': 1, 'isBaryon': true, 'additionalIds': [] },
    { 'id': 'ANTICHARMED_XI', 'anti': 'CHARMED_XI', 'name': 'Anticharmed xi', 'symbol': 'Ξ0c', 'contents': 'dsc', 'mass': 2470.88, 'charge3': 0, 'generation': 0, 'baryonCount': -1, 'isBaryon': true, 'additionalIds': [] },
    { 'id': 'CHARMED_XI_PRIME_PLUS', 'anti': 'ANTICHARMED_XI_PRIME_MINUS', 'name': 'charmed xi prime Plus', 'symbol': 'Ξ′+c', 'contents': 'usc', 'mass': 2575.6, 'charge3': 3, 'generation': 0, 'baryonCount': 1, 'isBaryon': true, 'additionalIds': [] },
    { 'id': 'ANTICHARMED_XI_PRIME_MINUS', 'anti': 'CHARMED_XI_PRIME_PLUS', 'name': 'Anticharmed xi prime Minus', 'symbol': 'Ξ′+c', 'contents': 'usc', 'mass': 2575.6, 'charge3': -3, 'generation': 0, 'baryonCount': -1, 'isBaryon': true, 'additionalIds': [] },
    { 'id': 'CHARMED_XI_PRIME', 'anti': 'ANTICHARMED_XI_PRIME', 'name': 'charmed xi prime', 'symbol': 'Ξ′0c', 'contents': 'dsc', 'mass': 2577.9, 'charge3': 0, 'generation': 0, 'baryonCount': 1, 'isBaryon': true, 'additionalIds': [] },
    { 'id': 'ANTICHARMED_XI_PRIME', 'anti': 'CHARMED_XI_PRIME', 'name': 'Anticharmed xi prime', 'symbol': 'Ξ′0c', 'contents': 'dsc', 'mass': 2577.9, 'charge3': 0, 'generation': 0, 'baryonCount': -1, 'isBaryon': true, 'additionalIds': [] },
    { 'id': 'DOUBLE_CHARMED_XI_PLUS', 'anti': 'ANTIDOUBLE_CHARMED_XI_MINUS', 'name': 'double charmed xi Plus', 'symbol': 'Ξ++cc', 'contents': 'ucc', 'mass': 3621.4, 'charge3': 6, 'generation': 0, 'baryonCount': 1, 'isBaryon': true, 'additionalIds': [] },
    { 'id': 'ANTIDOUBLE_CHARMED_XI_MINUS', 'anti': 'DOUBLE_CHARMED_XI_PLUS', 'name': 'Antidouble charmed xi Minus', 'symbol': 'Ξ++cc', 'contents': 'ucc', 'mass': 3621.4, 'charge3': -6, 'generation': 0, 'baryonCount': -1, 'isBaryon': true, 'additionalIds': [] },
    { 'id': 'BOTTOM_XI', 'anti': 'ANTIBOTTOM_XI', 'name': 'bottom xi', 'symbol': 'Ξ0b', 'contents': 'usb', 'mass': 5787.8, 'charge3': 0, 'generation': 0, 'baryonCount': 1, 'isBaryon': true, 'additionalIds': [] },
    { 'id': 'ANTIBOTTOM_XI', 'anti': 'BOTTOM_XI', 'name': 'Antibottom xi', 'symbol': 'Ξ0b', 'contents': 'usb', 'mass': 5787.8, 'charge3': 0, 'generation': 0, 'baryonCount': -1, 'isBaryon': true, 'additionalIds': [] },
    { 'id': 'BOTTOM_XI_MINUS', 'anti': 'ANTIBOTTOM_XI_PLUS', 'name': 'bottom xi Minus', 'symbol': 'Ξ−b', 'contents': 'dsb', 'mass': 5791.1, 'charge3': -3, 'generation': 0, 'baryonCount': 1, 'isBaryon': true, 'additionalIds': [] },
    { 'id': 'ANTIBOTTOM_XI_PLUS', 'anti': 'BOTTOM_XI_MINUS', 'name': 'Antibottom xi Minus', 'symbol': 'Ξ−b', 'contents': 'dsb', 'mass': 5791.1, 'charge3': 3, 'generation': 0, 'baryonCount': -1, 'isBaryon': true, 'additionalIds': [] },
    { 'id': 'CHARMED_OMEGA', 'anti': 'ANTICHARMED_OMEGA', 'name': 'charmed omega', 'symbol': 'Ω0c', 'contents': 'ssc', 'mass': 2695.2, 'charge3': 0, 'generation': 0, 'baryonCount': 1, 'isBaryon': true, 'additionalIds': [] },
    { 'id': 'ANTICHARMED_OMEGA', 'anti': 'CHARMED_OMEGA', 'name': 'Anticharmed omega', 'symbol': 'Ω0c', 'contents': 'ssc', 'mass': 2695.2, 'charge3': 0, 'generation': 0, 'baryonCount': -1, 'isBaryon': true, 'additionalIds': [] },
    { 'id': 'BOTTOM_OMEGA_MINUS', 'anti': 'ANTIBOTTOM_OMEGA_PLUS', 'name': 'bottom omega Minus', 'symbol': 'Ω−b', 'contents': 'ssb', 'mass': 6071.0, 'charge3': -3, 'generation': 0, 'baryonCount': 1, 'isBaryon': true, 'additionalIds': [] },
    { 'id': 'ANTIBOTTOM_OMEGA_PLUS', 'anti': 'BOTTOM_OMEGA_MINUS', 'name': 'Antibottom omega Minus', 'symbol': 'Ω−b', 'contents': 'ssb', 'mass': 6071.0, 'charge3': 3, 'generation': 0, 'baryonCount': -1, 'isBaryon': true, 'additionalIds': [] },

    { 'id': 'DELTA_PLUS', 'anti': 'ANTIDELTA_MINUS', 'name': 'delta Plus', 'symbol': 'Δ++(1232)', 'contents': 'uuu', 'mass': 1232.0, 'charge3': 6, 'generation': 0, 'baryonCount': 1, 'isBaryon': true, 'additionalIds': [] },
    { 'id': 'ANTIDELTA_MINUS', 'anti': 'DELTA_PLUS', 'name': 'Antidelta Minus', 'symbol': 'Δ++(1232)', 'contents': 'uuu', 'mass': 1232.0, 'charge3': -6, 'generation': 0, 'baryonCount': -1, 'isBaryon': true, 'additionalIds': [] },
    { 'id': 'DELTA_PLUS', 'anti': 'ANTIDELTA_MINUS', 'name': 'delta Plus', 'symbol': 'Δ+(1232)', 'contents': 'uud', 'mass': 1232.0, 'charge3': 3, 'generation': 0, 'baryonCount': 1, 'isBaryon': true, 'additionalIds': [] },
    { 'id': 'ANTIDELTA_MINUS', 'anti': 'DELTA_PLUS', 'name': 'Antidelta Minus', 'symbol': 'Δ+(1232)', 'contents': 'uud', 'mass': 1232.0, 'charge3': -3, 'generation': 0, 'baryonCount': -1, 'isBaryon': true, 'additionalIds': [] },
    { 'id': 'DELTA', 'anti': 'ANTIDELTA', 'name': 'delta', 'symbol': 'Δ0(1232)', 'contents': 'udd', 'mass': 1232.0, 'charge3': 0, 'generation': 0, 'baryonCount': 1, 'isBaryon': true, 'additionalIds': [] },
    { 'id': 'ANTIDELTA', 'anti': 'DELTA', 'name': 'Antidelta', 'symbol': 'Δ0(1232)', 'contents': 'udd', 'mass': 1232.0, 'charge3': 0, 'generation': 0, 'baryonCount': -1, 'isBaryon': true, 'additionalIds': [] },
    { 'id': 'DELTA_MINUS', 'anti': 'ANTIDELTA_PLUS', 'name': 'delta Minus', 'symbol': 'Δ−(1232)', 'contents': 'ddd', 'mass': 1232.0, 'charge3': -3, 'generation': 0, 'baryonCount': 1, 'isBaryon': true, 'additionalIds': [] },
    { 'id': 'ANTIDELTA_PLUS', 'anti': 'DELTA_MINUS', 'name': 'Antidelta Minus', 'symbol': 'Δ−(1232)', 'contents': 'ddd', 'mass': 1232.0, 'charge3': 3, 'generation': 0, 'baryonCount': -1, 'isBaryon': true, 'additionalIds': [] },
    { 'id': 'SIGMA_PLUS', 'anti': 'ANTISIGMA_MINUS', 'name': 'sigma Plus', 'symbol': 'Σ∗+(1385)', 'contents': 'uus', 'mass': 1382.8, 'charge3': 3, 'generation': 0, 'baryonCount': 1, 'isBaryon': true, 'additionalIds': [] },
    { 'id': 'ANTISIGMA_MINUS', 'anti': 'SIGMA_PLUS', 'name': 'Antisigma Minus', 'symbol': 'Σ∗+(1385)', 'contents': 'uus', 'mass': 1382.8, 'charge3': -3, 'generation': 0, 'baryonCount': -1, 'isBaryon': true, 'additionalIds': [] },
    { 'id': 'SIGMA', 'anti': 'ANTISIGMA', 'name': 'sigma', 'symbol': 'Σ∗0(1385)', 'contents': 'uds', 'mass': 1383.7, 'charge3': 0, 'generation': 0, 'baryonCount': 1, 'isBaryon': true, 'additionalIds': [] },
    { 'id': 'ANTISIGMA', 'anti': 'SIGMA', 'name': 'Antisigma', 'symbol': 'Σ∗0(1385)', 'contents': 'uds', 'mass': 1383.7, 'charge3': 0, 'generation': 0, 'baryonCount': -1, 'isBaryon': true, 'additionalIds': [] },
    { 'id': 'SIGMA_MINUS', 'anti': 'ANTISIGMA_PLUS', 'name': 'sigma Minus', 'symbol': 'Σ∗−(1385)', 'contents': 'dds', 'mass': 1387.2, 'charge3': -3, 'generation': 0, 'baryonCount': 1, 'isBaryon': true, 'additionalIds': [] },
    { 'id': 'ANTISIGMA_PLUS', 'anti': 'SIGMA_MINUS', 'name': 'Antisigma Minus', 'symbol': 'Σ∗−(1385)', 'contents': 'dds', 'mass': 1387.2, 'charge3': 3, 'generation': 0, 'baryonCount': -1, 'isBaryon': true, 'additionalIds': [] },
    { 'id': 'CHARMED_SIGMA_PLUS', 'anti': 'ANTICHARMED_SIGMA_MINUS', 'name': 'charmed sigma Plus', 'symbol': 'Σ∗++c(2520)', 'contents': 'uuc', 'mass': 2517.9, 'charge3': 6, 'generation': 0, 'baryonCount': 1, 'isBaryon': true, 'additionalIds': [] },
    { 'id': 'ANTICHARMED_SIGMA_MINUS', 'anti': 'CHARMED_SIGMA_PLUS', 'name': 'Anticharmed sigma Minus', 'symbol': 'Σ∗++c(2520)', 'contents': 'uuc', 'mass': 2517.9, 'charge3': -6, 'generation': 0, 'baryonCount': -1, 'isBaryon': true, 'additionalIds': [] },
    { 'id': 'CHARMED_SIGMA_PLUS', 'anti': 'ANTICHARMED_SIGMA_MINUS', 'name': 'charmed sigma Plus', 'symbol': 'Σ∗+c(2520)', 'contents': 'udc', 'mass': 2517.5, 'charge3': 3, 'generation': 0, 'baryonCount': 1, 'isBaryon': true, 'additionalIds': [] },
    { 'id': 'ANTICHARMED_SIGMA_MINUS', 'anti': 'CHARMED_SIGMA_PLUS', 'name': 'Anticharmed sigma Minus', 'symbol': 'Σ∗+c(2520)', 'contents': 'udc', 'mass': 2517.5, 'charge3': -3, 'generation': 0, 'baryonCount': -1, 'isBaryon': true, 'additionalIds': [] },
    { 'id': 'CHARMED_SIGMA', 'anti': 'ANTICHARMED_SIGMA', 'name': 'charmed sigma', 'symbol': 'Σ∗0c(2520)', 'contents': 'ddc', 'mass': 2518.8, 'charge3': 0, 'generation': 0, 'baryonCount': 1, 'isBaryon': true, 'additionalIds': [] },
    { 'id': 'ANTICHARMED_SIGMA', 'anti': 'CHARMED_SIGMA', 'name': 'Anticharmed sigma', 'symbol': 'Σ∗0c(2520)', 'contents': 'ddc', 'mass': 2518.8, 'charge3': 0, 'generation': 0, 'baryonCount': -1, 'isBaryon': true, 'additionalIds': [] },
    { 'id': 'BOTTOM_SIGMA_PLUS', 'anti': 'ANTIBOTTOM_SIGMA_MINUS', 'name': 'bottom sigma Plus', 'symbol': 'Σ∗+b', 'contents': 'uub', 'mass': 5832.1, 'charge3': 3, 'generation': 0, 'baryonCount': 1, 'isBaryon': true, 'additionalIds': [] },
    { 'id': 'ANTIBOTTOM_SIGMA_MINUS', 'anti': 'BOTTOM_SIGMA_PLUS', 'name': 'Antibottom sigma Minus', 'symbol': 'Σ∗+b', 'contents': 'uub', 'mass': 5832.1, 'charge3': -3, 'generation': 0, 'baryonCount': -1, 'isBaryon': true, 'additionalIds': [] },
    { 'id': 'BOTTOM_SIGMA_MINUS', 'anti': 'ANTIBOTTOM_SIGMA_PLUS', 'name': 'bottom sigma Minus', 'symbol': 'Σ∗−b', 'contents': 'ddb', 'mass': 5835.1, 'charge3': -3, 'generation': 0, 'baryonCount': 1, 'isBaryon': true, 'additionalIds': [] },
    { 'id': 'ANTIBOTTOM_SIGMA_PLUS', 'anti': 'BOTTOM_SIGMA_MINUS', 'name': 'Antibottom sigma Minus', 'symbol': 'Σ∗−b', 'contents': 'ddb', 'mass': 5835.1, 'charge3': 3, 'generation': 0, 'baryonCount': -1, 'isBaryon': true, 'additionalIds': [] },
    { 'id': 'XI', 'anti': 'ANTIXI', 'name': 'xi', 'symbol': 'Ξ∗0(1530)', 'contents': 'uss', 'mass': 1531.8, 'charge3': 0, 'generation': 0, 'baryonCount': 1, 'isBaryon': true, 'additionalIds': [] },
    { 'id': 'ANTIXI', 'anti': 'XI', 'name': 'Antixi', 'symbol': 'Ξ∗0(1530)', 'contents': 'uss', 'mass': 1531.8, 'charge3': 0, 'generation': 0, 'baryonCount': -1, 'isBaryon': true, 'additionalIds': [] },
    { 'id': 'XI_MINUS', 'anti': 'ANTIXI_PLUS', 'name': 'xi Minus', 'symbol': 'Ξ∗−(1530)', 'contents': 'dss', 'mass': 1535.0, 'charge3': -3, 'generation': 0, 'baryonCount': 1, 'isBaryon': true, 'additionalIds': [] },
    { 'id': 'ANTIXI_PLUS', 'anti': 'XI_MINUS', 'name': 'Antixi Minus', 'symbol': 'Ξ∗−(1530)', 'contents': 'dss', 'mass': 1535.0, 'charge3': 3, 'generation': 0, 'baryonCount': -1, 'isBaryon': true, 'additionalIds': [] },
    { 'id': 'CHARMED_XI_PLUS', 'anti': 'ANTICHARMED_XI_MINUS', 'name': 'charmed xi Plus', 'symbol': 'Ξ∗+c(2645)', 'contents': 'usc', 'mass': 2645.9, 'charge3': 3, 'generation': 0, 'baryonCount': 1, 'isBaryon': true, 'additionalIds': [] },
    { 'id': 'ANTICHARMED_XI_MINUS', 'anti': 'CHARMED_XI_PLUS', 'name': 'Anticharmed xi Minus', 'symbol': 'Ξ∗+c(2645)', 'contents': 'usc', 'mass': 2645.9, 'charge3': -3, 'generation': 0, 'baryonCount': -1, 'isBaryon': true, 'additionalIds': [] },
    { 'id': 'CHARMED_XI', 'anti': 'ANTICHARMED_XI', 'name': 'charmed xi', 'symbol': 'Ξ∗0c(2645)', 'contents': 'dsc', 'mass': 2645.9, 'charge3': 0, 'generation': 0, 'baryonCount': 1, 'isBaryon': true, 'additionalIds': [] },
    { 'id': 'ANTICHARMED_XI', 'anti': 'CHARMED_XI', 'name': 'Anticharmed xi', 'symbol': 'Ξ∗0c(2645)', 'contents': 'dsc', 'mass': 2645.9, 'charge3': 0, 'generation': 0, 'baryonCount': -1, 'isBaryon': true, 'additionalIds': [] },
    { 'id': 'BOTTOM_XI', 'anti': 'ANTIBOTTOM_XI', 'name': 'bottom xi', 'symbol': 'Ξ∗0b', 'contents': 'usb', 'mass': 5945.5, 'charge3': 0, 'generation': 0, 'baryonCount': 1, 'isBaryon': true, 'additionalIds': [] },
    { 'id': 'ANTIBOTTOM_XI', 'anti': 'BOTTOM_XI', 'name': 'Antibottom xi', 'symbol': 'Ξ∗0b', 'contents': 'usb', 'mass': 5945.5, 'charge3': 0, 'generation': 0, 'baryonCount': -1, 'isBaryon': true, 'additionalIds': [] },
    { 'id': 'OMEGA_MINUS', 'anti': 'ANTIOMEGA_PLUS', 'name': 'omega Minus', 'symbol': 'Ω−', 'contents': 'sss', 'mass': 1672.45, 'charge3': -3, 'generation': 0, 'baryonCount': 1, 'isBaryon': true, 'additionalIds': [] },
    { 'id': 'ANTIOMEGA_PLUS', 'anti': 'OMEGA_MINUS', 'name': 'Antiomega Minus', 'symbol': 'Ω−', 'contents': 'sss', 'mass': 1672.45, 'charge3': 3, 'generation': 0, 'baryonCount': -1, 'isBaryon': true, 'additionalIds': [] },
    { 'id': 'CHARMED_OMEGA', 'anti': 'ANTICHARMED_OMEGA', 'name': 'charmed omega', 'symbol': 'Ω∗0c(2770)', 'contents': 'ssc', 'mass': 2765.9, 'charge3': 0, 'generation': 0, 'baryonCount': 1, 'isBaryon': true, 'additionalIds': [] },
    { 'id': 'ANTICHARMED_OMEGA', 'anti': 'CHARMED_OMEGA', 'name': 'Anticharmed omega', 'symbol': 'Ω∗0c(2770)', 'contents': 'ssc', 'mass': 2765.9, 'charge3': 0, 'generation': 0, 'baryonCount': -1, 'isBaryon': true, 'additionalIds': [] },
    { 'id': 'PION_PLUS', 'anti': 'PION_MINUS', 'name': 'Pion Plus', 'symbol': 'π+', 'contents': 'ud', 'mass': 139.57018, 'charge3': 3, 'generation': 0, 'baryonCount': 0, 'isMeson': true, 'additionalIds': [] },
    { 'id': 'PION_MINUS', 'anti': 'PION_PLUS', 'name': 'Pion Minus', 'symbol': 'π+', 'contents': 'ud', 'mass': 139.57018, 'charge3': -3, 'generation': 0, 'baryonCount': 0, 'isMeson': true, 'additionalIds': [] },
    { 'id': 'PION', 'name': 'Pion', 'symbol': 'π0', 'contents': '', 'mass': 134.9766, 'charge3': 0, 'generation': 0, 'baryonCount': 0, 'isMeson': true, 'additionalIds': [] },
    { 'id': 'ETA_MESON', 'name': 'Eta meson', 'symbol': 'η', 'contents': '', 'mass': 547.862, 'charge3': 0, 'generation': 0, 'baryonCount': 0, 'isMeson': true, 'additionalIds': [] },
    { 'id': 'ETA_PRIME_MESON', 'name': 'Eta prime meson', 'symbol': 'η′(958)', 'contents': '', 'mass': 957.78, 'charge3': 0, 'generation': 0, 'baryonCount': 0, 'isMeson': true, 'additionalIds': [] },
    { 'id': 'CHARMED_ETA_MESON', 'name': 'Charmed eta meson', 'symbol': 'ηc(1S)', 'contents': 'cc', 'mass': 2983.6, 'charge3': 0, 'generation': 0, 'baryonCount': 0, 'isMeson': true, 'additionalIds': [] },
    { 'id': 'BOTTOM_ETA_MESON', 'name': 'Bottom eta meson', 'symbol': 'ηb(1S)', 'contents': 'bb', 'mass': 9398.0, 'charge3': 0, 'generation': 0, 'baryonCount': 0, 'isMeson': true, 'additionalIds': [] },
    { 'id': 'KAON_PLUS', 'anti': 'KAON_MINUS', 'name': 'Kaon Plus', 'symbol': 'K+', 'contents': 'us', 'mass': 493.677, 'charge3': 3, 'generation': 0, 'baryonCount': 0, 'isMeson': true, 'additionalIds': [] },
    { 'id': 'KAON_MINUS', 'anti': 'KAON_PLUS', 'name': 'Kaon Minus', 'symbol': 'K+', 'contents': 'us', 'mass': 493.677, 'charge3': -3, 'generation': 0, 'baryonCount': 0, 'isMeson': true, 'additionalIds': [] },
    { 'id': 'KAON', 'name': 'Kaon', 'symbol': 'K0', 'contents': 'ds', 'mass': 497.614, 'charge3': 0, 'generation': 0, 'baryonCount': 0, 'isMeson': true, 'additionalIds': [] },
    { 'id': 'K-SHORT', 'name': 'K-Short', 'symbol': 'K0S', 'contents': '', 'mass': 497.614, 'charge3': 0, 'generation': 0, 'baryonCount': 0, 'isMeson': true, 'additionalIds': [] },
    { 'id': 'K-LONG', 'name': 'K-Long', 'symbol': 'K0L', 'contents': '', 'mass': 497.614, 'charge3': 0, 'generation': 0, 'baryonCount': 0, 'isMeson': true, 'additionalIds': [] },
    { 'id': 'D_MESON_PLUS', 'anti': 'D_MESON_MINUS', 'name': 'D meson Plus', 'symbol': 'D+', 'contents': 'cd', 'mass': 1869.61, 'charge3': 3, 'generation': 0, 'baryonCount': 0, 'isMeson': true, 'additionalIds': [] },
    { 'id': 'D_MESON_MINUS', 'anti': 'D_MESON_PLUS', 'name': 'D meson Minus', 'symbol': 'D+', 'contents': 'cd', 'mass': 1869.61, 'charge3': -3, 'generation': 0, 'baryonCount': 0, 'isMeson': true, 'additionalIds': [] },
    { 'id': 'D_MESON', 'name': 'D meson', 'symbol': 'D0', 'contents': 'cu', 'mass': 1864.84, 'charge3': 0, 'generation': 0, 'baryonCount': 0, 'isMeson': true, 'additionalIds': [] },
    { 'id': 'STRANGE_D_MESON_PLUS', 'anti': 'STRANGE_D_MESON_MINUS', 'name': 'strange D meson Plus', 'symbol': 'D+s', 'contents': 'cs', 'mass': 1968.3, 'charge3': 3, 'generation': 0, 'baryonCount': 0, 'isMeson': true, 'additionalIds': [] },
    { 'id': 'STRANGE_D_MESON_MINUS', 'anti': 'STRANGE_D_MESON_PLUS', 'name': 'strange D meson Minus', 'symbol': 'D+s', 'contents': 'cs', 'mass': 1968.3, 'charge3': -3, 'generation': 0, 'baryonCount': 0, 'isMeson': true, 'additionalIds': [] },
    { 'id': 'B_MESON_PLUS', 'anti': 'B_MESON_MINUS', 'name': 'B meson Plus', 'symbol': 'B+', 'contents': 'ub', 'mass': 5279.26, 'charge3': 3, 'generation': 0, 'baryonCount': 0, 'isMeson': true, 'additionalIds': [] },
    { 'id': 'B_MESON_MINUS', 'anti': 'B_MESON_PLUS', 'name': 'B meson Minus', 'symbol': 'B+', 'contents': 'ub', 'mass': 5279.26, 'charge3': -3, 'generation': 0, 'baryonCount': 0, 'isMeson': true, 'additionalIds': [] },
    { 'id': 'B_MESON', 'name': 'B meson', 'symbol': 'B0', 'contents': 'db', 'mass': 5279.58, 'charge3': 0, 'generation': 0, 'baryonCount': 0, 'isMeson': true, 'additionalIds': [] },
    { 'id': 'STRANGE_B_MESON', 'name': 'Strange B meson', 'symbol': 'B0s', 'contents': 'sb', 'mass': 5366.77, 'charge3': 0, 'generation': 0, 'baryonCount': 0, 'isMeson': true, 'additionalIds': [] },
    { 'id': 'CHARMED_B_MESON_PLUS', 'anti': 'CHARMED_B_MESON_MINUS', 'name': 'Charmed B meson Plus', 'symbol': 'B+c', 'contents': 'cb', 'mass': 6275.6, 'charge3': 3, 'generation': 0, 'baryonCount': 0, 'isMeson': true, 'additionalIds': [] },
    { 'id': 'CHARMED_B_MESON_MINUS', 'anti': 'CHARMED_B_MESON_PLUS', 'name': 'Charmed B meson Minus', 'symbol': 'B+c', 'contents': 'cb', 'mass': 6275.6, 'charge3': -3, 'generation': 0, 'baryonCount': 0, 'isMeson': true, 'additionalIds': [] },

    { 'id': 'CHARGED_RHO_MESON_PLUS', 'anti': 'CHARGED_RHO_MESON_MINUS', 'name': 'Charged rho meson Plus', 'symbol': 'ρ+(770)', 'contents': 'ud', 'mass': 775.11, 'charge3': 3, 'generation': 0, 'baryonCount': 0, 'isMeson': true, 'additionalIds': [] },
    { 'id': 'CHARGED_RHO_MESON_MINUS', 'anti': 'CHARGED_RHO_MESON_PLUS', 'name': 'Charged rho meson Minus', 'symbol': 'ρ+(770)', 'contents': 'ud', 'mass': 775.11, 'charge3': -3, 'generation': 0, 'baryonCount': 0, 'isMeson': true, 'additionalIds': [] },
    { 'id': 'NEUTRAL_RHO_MESON', 'name': 'Neutral rho meson', 'symbol': 'ρ0(770)', 'contents': '', 'mass': 775.26, 'charge3': 0, 'generation': 0, 'baryonCount': 0, 'isMeson': true, 'additionalIds': [] },
    { 'id': 'OMEGA_MESON', 'name': 'Omega meson', 'symbol': 'ω(782)', 'contents': '', 'mass': 782.65, 'charge3': 0, 'generation': 0, 'baryonCount': 0, 'isMeson': true, 'additionalIds': [] },
    { 'id': 'PHI_MESON', 'name': 'Phi meson', 'symbol': 'ϕ(1020)', 'contents': 'ss', 'mass': 1019.461, 'charge3': 0, 'generation': 0, 'baryonCount': 0, 'isMeson': true, 'additionalIds': [] },
    { 'id': 'J/PSI', 'name': 'J/Psi', 'symbol': 'J/ψ', 'contents': 'cc', 'mass': 3096.916, 'charge3': 0, 'generation': 0, 'baryonCount': 0, 'isMeson': true, 'additionalIds': [] },
    { 'id': 'UPSILON_MESON', 'name': 'Upsilon meson', 'symbol': 'ϒ(1S)', 'contents': 'bb', 'mass': 9460.3, 'charge3': 0, 'generation': 0, 'baryonCount': 0, 'isMeson': true, 'additionalIds': [] },
    { 'id': 'KAON_PLUS', 'anti': 'KAON_MINUS', 'name': 'Kaon Plus', 'symbol': 'K∗+', 'contents': 'us', 'mass': 891.66, 'charge3': 3, 'generation': 0, 'baryonCount': 0, 'isMeson': true, 'additionalIds': [] },
    { 'id': 'KAON_MINUS', 'anti': 'KAON_PLUS', 'name': 'Kaon Minus', 'symbol': 'K∗+', 'contents': 'us', 'mass': 891.66, 'charge3': -3, 'generation': 0, 'baryonCount': 0, 'isMeson': true, 'additionalIds': [] },
    { 'id': 'KAON', 'name': 'Kaon', 'symbol': 'K∗0', 'contents': 'ds', 'mass': 895.81, 'charge3': 0, 'generation': 0, 'baryonCount': 0, 'isMeson': true, 'additionalIds': [] },
    { 'id': 'D_MESON_PLUS', 'anti': 'D_MESON_MINUS', 'name': 'D meson Plus', 'symbol': 'D∗+(2010)', 'contents': 'cd', 'mass': 2010.26, 'charge3': 3, 'generation': 0, 'baryonCount': 0, 'isMeson': true, 'additionalIds': [] },
    { 'id': 'D_MESON_MINUS', 'anti': 'D_MESON_PLUS', 'name': 'D meson Minus', 'symbol': 'D∗+(2010)', 'contents': 'cd', 'mass': 2010.26, 'charge3': -3, 'generation': 0, 'baryonCount': 0, 'isMeson': true, 'additionalIds': [] },
    { 'id': 'D_MESON', 'name': 'D meson', 'symbol': 'D∗0(2007)', 'contents': 'cu', 'mass': 2006.96, 'charge3': 0, 'generation': 0, 'baryonCount': 0, 'isMeson': true, 'additionalIds': [] },
    { 'id': 'STRANGE_D_MESON_PLUS', 'anti': 'STRANGE_D_MESON_MINUS', 'name': 'Strange D meson Plus', 'symbol': 'D∗+s', 'contents': 'cs', 'mass': 2112.1, 'charge3': 3, 'generation': 0, 'baryonCount': 0, 'isMeson': true, 'additionalIds': [] },
    { 'id': 'STRANGE_D_MESON_MINUS', 'anti': 'STRANGE_D_MESON_PLUS', 'name': 'Strange D meson Minus', 'symbol': 'D∗+s', 'contents': 'cs', 'mass': 2112.1, 'charge3': -3, 'generation': 0, 'baryonCount': 0, 'isMeson': true, 'additionalIds': [] },
    { 'id': 'B_MESON_PLUS', 'anti': 'B_MESON_MINUS', 'name': 'B meson Plus', 'symbol': 'B∗+', 'contents': 'ub', 'mass': 5325.2, 'charge3': 3, 'generation': 0, 'baryonCount': 0, 'isMeson': true, 'additionalIds': [] },
    { 'id': 'B_MESON_MINUS', 'anti': 'B_MESON_PLUS', 'name': 'B meson Minus', 'symbol': 'B∗+', 'contents': 'ub', 'mass': 5325.2, 'charge3': -3, 'generation': 0, 'baryonCount': 0, 'isMeson': true, 'additionalIds': [] },
    { 'id': 'B_MESON', 'name': 'B meson', 'symbol': 'B∗0', 'contents': 'db', 'mass': 5325.2, 'charge3': 0, 'generation': 0, 'baryonCount': 0, 'isMeson': true, 'additionalIds': [] },
    { 'id': 'STRANGE_B_MESON', 'name': 'Strange B meson', 'symbol': 'B∗0s', 'contents': 'sb', 'mass': 5415.4, 'charge3': 0, 'generation': 0, 'baryonCount': 0, 'isMeson': true, 'additionalIds': [] },

])

export function getParticleByID(id: string): Particle {
    let p = Particles.find(e => e.id == id)
    if (!p || p.id != id) {
        throw "Particle with ID: " + id + " does not exist."
    }
    return Object.assign(Object.create(p), p)
}
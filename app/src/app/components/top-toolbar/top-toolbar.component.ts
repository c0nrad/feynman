import { Component, OnInit } from '@angular/core';
import { InteractionService } from 'src/app/services/interaction.service';
import { Line } from '../../../../../lib/line';
import { Particle } from '../../../../../lib/particle';

@Component({
  selector: 'app-top-toolbar',
  template: `
  <div class="card">
  <div class="container-fluid">
      <div class="row">
        <div class="col-md-2">
          <p class="text-center">Bosons</p>
          <div class="row no-gutters">
            <div class="col-md-6 no-gutters" *ngFor="let p of bosons">
              <button type="button" class="btn btn-block btn-light" (click)="addLine(p.id)">
                  <ng-katex [equation]="p.symbol"></ng-katex></button>
            </div>
          </div>
        </div>
      
        <div class="col-md-2">
          <p class="text-center">Quarks</p>
          <div class="row no-gutters">
            <div class="col-md-4 no-gutters" *ngFor="let p of quarks">
              <button type="button" class="btn btn-block btn-light" (click)="addLine(p.id)">
                  <ng-katex [equation]="p.symbol"></ng-katex></button>
            </div>
          </div>
        </div>
      
        <div class="col-md-2">
          <p class="text-center">Leptons</p>
          <div class="row no-gutters">
            <div class="col-md-4 no-gutters" *ngFor="let p of leptons">
              <button type="button" class="btn btn-block btn-light" (click)="addLine(p.id)">
                  <ng-katex [equation]="p.symbol"></ng-katex></button>
            </div>
          </div>
        </div>


        <div class="col-md-2">
          <p class="text-center">Particles</p>
          <input placeholder="Particle Search" class="form-control">
          <button class="float-right btn btn-light">Insert</button>
          </div>

        <div class="col-md-2">
          <p class="text-center">Options</p>
          <input type="checkbox">Hide Grid
          <br>

        </div>

        </div>
    </div>
  </div>
  `,
  styles: [
  ]
})
export class TopToolbarComponent implements OnInit {

  bosons: ParticleID[]
  quarks: ParticleID[]
  leptons: ParticleID[]

  constructor(private interactionService: InteractionService) {
    this.bosons = [
      { id: "PHOTON", symbol: "\\gamma" },
      { id: "W_MINUS", symbol: "W^{-/+}" },
      { id: "GLUON", symbol: "g" },
      { id: "Z", symbol: "Z" }
    ]

    this.quarks = [
      { id: "UP", symbol: "u" },
      { id: "TOP", symbol: "t" },
      { id: "CHARM", symbol: "c" },
      { id: "DOWN", symbol: "d" },
      { id: "BOTTOM", symbol: "b" },
      { id: "STRANGE", symbol: "s" },
    ]

    this.leptons = [
      { id: "ELECTRON", symbol: "e" },
      { id: "MUON", symbol: "\\mu" },
      { id: "TAU", symbol: "\\tau" },
      { id: "ELECTRON_NEUTRINO", symbol: "\\nu_e" },
      { id: "MUON_NEUTRINO", symbol: "\\nu_{\\mu}" },
      { id: "TAU_NEUTRINO", symbol: "\\nu_{\\tau}" },
    ]
  }

  addLine(id: string) {
    this.interactionService.addParticle(id)
  }

  ngOnInit(): void {

  }

}

interface ParticleID {
  id: string
  symbol: string
}
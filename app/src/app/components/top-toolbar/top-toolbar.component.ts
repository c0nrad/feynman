import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { InteractionService } from 'src/app/services/interaction.service';
import { RenderService } from 'src/app/services/render.service';
import { Line } from '../../../../../lib/line';
import { Particle, Particles } from '../../../../../lib/particle';

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
              <button type="button" class="btn btn-block btn-light" (click)="addParticle(p.id)">
                  <ng-katex [equation]="p.symbol"></ng-katex></button>
            </div>
          </div>
        </div>
      
        <div class="col-md-2">
          <p class="text-center">Quarks</p>
          <div class="row no-gutters">
            <div class="col-md-4 no-gutters" *ngFor="let p of quarks">
              <button type="button" class="btn btn-block btn-light" (click)="addParticle(p.id)">
                  <ng-katex [equation]="p.symbol"></ng-katex></button>
            </div>
          </div>
        </div>
      
        <div class="col-md-2">
          <p class="text-center">Leptons</p>
          <div class="row no-gutters">
            <div class="col-md-4 no-gutters" *ngFor="let p of leptons">
              <button type="button" class="btn btn-block btn-light" (click)="addParticle(p.id)">
                  <ng-katex [equation]="p.symbol"></ng-katex></button>
            </div>
          </div>
        </div>


        <div class="col-md-2">
          <p class="text-center">Particles</p>
          <input placeholder="Particle Search" class="form-control" [(ngModel)]="newParticle" 
           [ngbTypeahead]="addParticleSearch">
          <button class="float-right btn btn-light" (click)="addParticle(newParticle)">Insert</button>
          </div>

        <div class="col-md-2">
          <p class="text-center">Options</p>

          <div class="form-check">
          <input type="checkbox" (change)="toggleGrid()" class="form-check-input" type="checkbox" value="" id="defaultCheck1">
        <label class="form-check-label" for="defaultCheck1">
        Hide Grid
        </label>
      </div>


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

  newParticle: string

  constructor(private interactionService: InteractionService, private renderService: RenderService) {
    this.newParticle = ""
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

  addParticle(id: string) {
    this.newParticle = ""
    this.interactionService.addParticle(id)
  }

  ngOnInit(): void {

  }

  addParticleSearch(text$: Observable<string>) {
    return text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 1 ? []
        : Particles.map(p => p.id).filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10)))
  }

  toggleGrid() {
    this.renderService.toggleGrid()
  }
}

interface ParticleID {
  id: string
  symbol: string
}
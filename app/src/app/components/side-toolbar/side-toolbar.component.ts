import { Component, OnInit } from '@angular/core';
import { RenderService } from 'src/app/services/render.service';
import { Interaction } from '../../../../../lib/interaction';
import { Line } from '../../../../../lib/line';
import { validateInteraction, ValidationError } from '../../../../../lib/validation';

import { InteractionService } from '../../services/interaction.service'

@Component({
  selector: 'app-side-toolbar',
  template: `
    <div>
      <div *ngIf="selected">
        <h3>Selected</h3>
        <p>{{selected.particle.id}}</p>
      </div>
      <h3> {{interaction.name || "Interaction"}} </h3>
      <strong>Stats</strong>
      <ul>
        <li>Charge In: {{interaction.chargeIn()}}</li>
        <li>Charge Out: {{interaction.chargeOut()}}</li>
        <li>Baryon In: {{interaction.baryonCountIn()}}</li>
        <li>Baryon Out: {{interaction.baryonCountOut()}}</li>
        <li>Lepton-Electron In: {{interaction.leptonCountIn(1)}}</li>
        <li>Lepton-Electron Out: {{interaction.leptonCountOut(1)}}</li>
        <li>Lepton-Muon In: {{interaction.leptonCountIn(2)}}</li>
        <li>Lepton-Muon Out: {{interaction.leptonCountOut(2)}}</li>
        <li>Lepton-Tau In: {{interaction.leptonCountIn(3)}}</li>
        <li>Lepton-Tau Out: {{interaction.leptonCountOut(3)}}</li>
        <li>Mass In: {{interaction.massIn()}} MeV/c^2</li>
        <li>Mass Out: {{interaction.massOut()}} MeV/c^2</li>
      </ul>


      <strong>Validation</strong>
      <ul>
        <li *ngFor="let vError of validationErrors">
          {{vError.id}} - {{vError.description}}
         </li>
         <p *ngIf="validationErrors.length == 0">All good!</p>
      </ul>
    </div>
  `,
  styles: [
  ]
})
export class SideToolbarComponent implements OnInit {

  interaction: Interaction
  selected?: Line
  validationErrors: ValidationError[]

  constructor(private renderService: RenderService, private interactionService: InteractionService) {
    this.interaction = {} as Interaction
    this.selected = undefined
    this.validationErrors = []
  }

  ngOnInit(): void {
    this.interactionService.interaction$.subscribe((interaction) => {
      this.interaction = interaction
      this.validationErrors = validateInteraction(interaction)
      console.log("Side-Toolbar", interaction)
    })

    this.renderService.selected$.subscribe((selected) => {
      if (selected && selected.a.X != -1 && selected.a.Y != -1)
        this.selected = selected
      else {
        this.selected = undefined
      }
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { RenderService } from 'src/app/services/render.service';
import { Interaction } from '../../../../../lib/interaction';
import { Line } from '../../../../../lib/line';
import { getParticleByID } from '../../../../../lib/particle';
import { validateInteraction, ValidationError } from '../../../../../lib/validation';

import { InteractionService } from '../../services/interaction.service'

@Component({
  selector: 'app-side-toolbar',
  template: `
    <div>
   
    <div *ngIf="selected">
      <div class="card">
        <div class="card-body">
          <h5 class="d-inline-block card-title">{{selected.particle.id}}</h5>
          <h6 class="d-inline-block card-subtitle mb-2 text-muted pl-1">({{selected.a.X}}, {{selected.a.Y}}) -> ({{selected.b.X}}, {{selected.b.Y}})</h6>
          <div>
          <button (click)="deleteSelected()" class="btn btn-info">Delete</button>
          <button (click)="convertToAnti()" class="btn btn-info">Anti Particle</button>
          </div>
          </div>
      </div>
    </div>
   
     <div class="card">
          <div class="card-body">
            <h5 class="d-inline-block card-title">Interaction  </h5>
            <h6 class="d-inline-block card-subtitle mb-2 text-muted pl-1">{{interaction.name || "Untitled"}}</h6>
            <table class="table table-sm">
              <tr><th>Property</th><th>In</th><th>Out</th>
              
              <tr>
                <td>Charge</td><td>{{interaction.chargeIn()}}</td><td>{{interaction.chargeOut()}}</td>
              </tr>

              <tr><td>Baryon</td><td>{{interaction.baryonCountIn()}}</td><td>{{interaction.baryonCountOut()}}</td></tr>
            <tr><td>Lepton-Electron</td><td>{{interaction.leptonCountIn(1)}}</td><td>{{interaction.leptonCountOut(1)}}</td></tr>
            <tr><td>Lepton-Muon</td><td>{{interaction.leptonCountIn(2)}}</td><td>{{interaction.leptonCountOut(2)}}</td></tr>
            <tr><td>Lepton-Tau</td><td>{{interaction.leptonCountIn(3)}}</td><td>{{interaction.leptonCountOut(3)}}</td></tr>
            <tr><td>Mass</td><td>{{interaction.massIn() | number:'1.1-1'}}</td><td>{{interaction.massOut() |number:'1.1-1'}}</td></tr>
            </table>
        
          </div>
        </div>
   
        <div class="card">
        <div class="card-body">
          <h5 class="d-inline-block card-title">Validation  </h5>
          <h6 class="d-inline-block card-subtitle mb-2 text-muted pl-1">{{validationErrors.length}} issues</h6>
 
          <p class="text-danger" *ngFor="let vError of validationErrors">
          {{vError.id}} - {{vError.description}}
         </p>
 
        </div>
      </div>


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

  deleteSelected() {
    if (this.selected) {
      this.interactionService.removeLine(this.selected)
      this.renderService.selected$.next(this.renderService.emptyLine)
      this.renderService.clearSelected()
    }
  }

  convertToAnti() {
    if (this.selected) {
      let old = this.selected.clone()
      let newLine = this.selected.clone()

      newLine.particle = getParticleByID(this.selected.particle.anti)
      this.interactionService.update(old, newLine)
    }
  }

}

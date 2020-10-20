import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InteractionService } from './services/interaction.service';
import { RenderService } from './services/render.service';

@Component({
  selector: 'app-root',
  template: `
  <div class="height: 100%">
    <app-header></app-header>

  <div class="container-fluid">
    
    <div class="row" style="height: 100%">
      <div class="col-md-9 p-0 m-0" style="height: 100%">
        <app-editor></app-editor>
      </div>

      <div class="col-md-3 m-0" style="border: 1px solid;">
        <app-side-toolbar style="height: 100%">
        </app-side-toolbar>
      </div>
    </div>
  </div>
</div>
  `,
  styles: []
})
export class AppComponent {
  title = 'feynman';

  constructor(private interactionService: InteractionService, private route: ActivatedRoute, private renderService: RenderService) {
    // interactionService.loadExampleInteraction("Pion Exchange")
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe((params) => {
      let example = params.get("example")
      if (example && example != "") {
        this.renderService.clear()
        this.renderService.drawGrid()
        this.interactionService.loadExampleInteraction(example)
      }
    })
  }
}

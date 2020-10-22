import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Interaction } from '../../../lib/interaction';
import { InteractionService } from './services/interaction.service';
import { RenderService } from './services/render.service';

declare let gtag: Function;

@Component({
  selector: 'app-root',
  template: `
  <div class="height: 100%">
    <app-header></app-header>
    <app-top-toolbar class="shadow-sm d-none d-md-block"></app-top-toolbar>

  <div class="container-fluid p-0">
    
    <div class="row no-gutters" style="height: 100%">
      <div class="col-md-9 no-gutters" style="height: 100%">
        <app-editor></app-editor>

        <div class="fixed-bottom">
          <div class="card text-centered">
          <div class="card-body">  
          <p class="text-centered card-text">
            
            <ng-katex [equation]="interaction.equation()"></ng-katex>
            </p>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-3 no-gutters">
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

  interaction: Interaction

  constructor(private interactionService: InteractionService, private route: ActivatedRoute,
    private renderService: RenderService, private router: Router) {
    // interactionService.loadExampleInteraction("Pion Exchange")
    this.interaction = new Interaction("", [])

    this.router.events.subscribe(event => {

      if (event instanceof NavigationEnd) {
        gtag('config', 'G-ZCNG5K7B89', { 'page_path': event.urlAfterRedirects });
      }
    });

  }

  ngOnInit() {
    // if (!this.route.snapshot.queryParamMap.get("example")) {
    // console.log("this.route.snapshot", this.route.snapshot)
    // this.router.navigate(["/"], { queryParams: { "example": "MUON_DECAY" } })
    // }

    this.interactionService.interaction$.subscribe((i) => {
      this.interaction = i
    })

    this.route.queryParamMap.subscribe((params) => {
      console.log("subscribe", params)
      let example = params.get("example")
      if (example && example != "") {
        this.renderService.clear()
        this.renderService.drawGrid()
        this.interactionService.loadExampleInteraction(example)
      }
    })
  }
}

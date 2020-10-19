import { Component } from '@angular/core';

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
        <app-toolbox style="height: 100%">
        </app-toolbox>
      </div>
    </div>
  </div>
</div>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'feynman';
}

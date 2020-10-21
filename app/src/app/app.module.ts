import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { KatexModule } from 'ng-katex';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EditorComponent } from './components/editor/editor.component';
import { HeaderComponent } from './components/header/header.component';
import { SideToolbarComponent } from './components/side-toolbar/side-toolbar.component';
import { RouterModule } from '@angular/router';
import { TopToolbarComponent } from './components/top-toolbar/top-toolbar.component';

@NgModule({
  declarations: [
    AppComponent, EditorComponent, HeaderComponent, SideToolbarComponent, TopToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    KatexModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

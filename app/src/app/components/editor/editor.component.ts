import { Component, OnInit, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { InteractionService } from 'src/app/services/interaction.service';
import { RenderService } from '../../services/render.service'
import { debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  @ViewChild('container') container: ElementRef;
  width: number

  constructor(private renderService: RenderService, private interactionService: InteractionService, private cdr: ChangeDetectorRef) {
    this.container = new ElementRef<any>(document);
    this.width = 800;
  }

  ngOnInit(): void {
    this.renderService.initCanvas()
    this.renderService.drawGrid()

    this.interactionService.interaction$.value

    this.interactionService.interaction$.subscribe((interaction) => {
      this.renderService.drawInteraction(interaction)
    })
  }

  ngAfterViewInit(): void {
    this.renderService.resize(this.container.nativeElement.offsetWidth, 800)

    fromEvent(window, 'resize').pipe(debounceTime(100))
      .subscribe((event) => {
        console.log("window resize")
        this.renderService.resize(this.container.nativeElement.offsetWidth, this.container.nativeElement.offsetHeight)
        this.width = this.container.nativeElement.offsetWidth;
        this.renderService.drawGrid()
      });

    this.cdr.detectChanges()
  }
}

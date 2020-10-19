import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { RenderService } from '../../services/render.service'

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  @ViewChild('container') container: ElementRef;

  constructor(private renderService: RenderService) {
    this.container = new ElementRef<any>(document);
  }

  ngOnInit(): void {

    // this.renderService.renderGrid()
    // this.renderService.resize()
  }

  ngAfterViewInit(): void {
    this.renderService.initCanvas()
    this.renderService.renderGrid()
    this.renderService.resize(this.container.nativeElement.offsetWidth, 800)

    window.addEventListener('resize', () =>
      this.renderService.resize(this.container.nativeElement.offsetWidth, 800)
    );
  }
}

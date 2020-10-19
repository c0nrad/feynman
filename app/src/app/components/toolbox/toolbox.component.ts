import { Component, OnInit } from '@angular/core';
import { NodeService } from '../../services/node.service'

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.css']
})
export class ToolBoxComponent implements OnInit {


  constructor(private nodeService: NodeService) {
  }

  ngOnInit(): void {
  }
}

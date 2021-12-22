import { Component, OnInit } from '@angular/core';
import * as animate from './animation';

@Component({
  selector: 'menu-icon',
  templateUrl: './menu-icon.component.html',
  styleUrls: ['./menu-icon.component.scss'],
  animations : [
    animate.parent,
    animate.firstLine,
    animate.secondLine,
    animate.lastLine
  ]
})
export class MenuIconComponent implements OnInit {
  state = 'default'
  constructor() { }

  ngOnInit(): void {
  }

  onAnimate(){
    this.state = this.state === 'active' ? 'default' : 'active'
  }
}

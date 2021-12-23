import { Component, OnInit } from '@angular/core';
import * as animate from './animation';
import { SidebarService } from '../../services/sidebar-state/sidebar-state.service';
import { Observable } from 'rxjs';

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
  state: string;
  private active:Observable<boolean>;
  private bool : boolean;

  constructor(private sidebarState : SidebarService) { 
    this.state = 'default',
    this.active = sidebarState.getState();
    this.bool = false
  }

  ngOnInit(): void {
   
  }

  onAnimate(){
    this.bool = !this.bool;
    this.state = this.bool ?'active' : 'default'
    this.sidebarState.setState(this.bool);
  }
}

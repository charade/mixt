import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../services/sidebar-state/sidebar-state.service';
import { Observable } from 'rxjs';
import { animateSidebar } from './animation';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations : [ animateSidebar ]
})
export class SidebarComponent implements OnInit {
  state : string;

  constructor(private sideBarState : SidebarService) { 
    this.state = 'default';
  }

  ngOnInit(): void {
    this.sideBarState.getState().subscribe(value => this.state = value ? 'active' : 'default')
  }

}

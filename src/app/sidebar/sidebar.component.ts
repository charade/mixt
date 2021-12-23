import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../services/sidebar-state/sidebar-state.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private sideBarState : SidebarService) { }

  ngOnInit(): void {
    this.sideBarState.getState().subscribe(state => console.log(state))
  }

}

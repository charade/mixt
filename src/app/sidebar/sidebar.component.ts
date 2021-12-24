import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../services/sidebar-state/sidebar-state.service';
import { Observable } from 'rxjs';
import { animateSidebar } from './animation';
import { MediaQueryService } from '../services/media-query/media-query.service';
import { DeviceSize } from 'src/assets/device-sizes';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations : [ animateSidebar ]
})
export class SidebarComponent implements OnInit {
  state : string;

  constructor(private sideBarState : SidebarService, private mediaQuery : MediaQueryService) { 
    this.state = 'default';
  }

  ngOnInit(): void {
    this.sideBarState.getState().subscribe(value => this.state = value ? 'active' : 'default')
    this.mediaQuery.matches(DeviceSize.sm).subscribe(
      (match : boolean) => this.state = match ? 'active' : 'default')
  }
}

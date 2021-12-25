import { Component, OnDestroy, OnInit } from '@angular/core';
import { SidebarService } from '../services/sidebar-state/sidebar-state.service';
import { Observable, Subscription } from 'rxjs';
import { animateSidebar } from './animation';
import { MediaQueryService } from '../services/media-query/media-query.service';
import { DeviceSize } from 'src/assets/device-sizes';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations : [ animateSidebar ]
})
export class SidebarComponent implements OnInit, OnDestroy {
  state : string;
  sidebarSubscription : Subscription
  mediaQuerySubscription : Subscription

  constructor(private sideBarState : SidebarService, private mediaQuery : MediaQueryService) { 
    this.state = 'default';
    this.sidebarSubscription = new Subscription();
    this.mediaQuerySubscription = new Subscription();
  }

  ngOnInit(): void {
    this.sidebarSubscription = this.sideBarState.getState().subscribe(value => this.state = value ? 'active' : 'default')
    this.mediaQuerySubscription = this.mediaQuery.matches(DeviceSize.sm).subscribe(
      (match : boolean) => this.sideBarState.setState(match))
  }

  ngOnDestroy():void {
    this.sidebarSubscription.unsubscribe();
    this.mediaQuerySubscription.unsubscribe()
  }
}

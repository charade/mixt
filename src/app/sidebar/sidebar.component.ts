import { Component, OnDestroy, OnInit } from '@angular/core';
import { SidebarService, SidebarState } from '../services/sidebar-state/sidebar-state.service';
import { Subscription } from 'rxjs';
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
    this.state = SidebarState .DEFAULT;
    this.sidebarSubscription = new Subscription();
    this.mediaQuerySubscription = new Subscription();
  }

  ngOnInit(): void {
    this.sidebarSubscription = this.sideBarState.getState().subscribe(
      value => this.state = value ? SidebarState.ACTIVE : SidebarState .DEFAULT
    );

    this.mediaQuerySubscription = this.mediaQuery.watch().subscribe(e => {
      const target =  <Window>e.currentTarget;
      const screenMatch = target.matchMedia(DeviceSize.sm).matches
      this.sideBarState.setState(screenMatch)
    });
  }

  ngOnDestroy():void {
    this.sidebarSubscription && this.sidebarSubscription.unsubscribe();
    this.mediaQuerySubscription && this.mediaQuerySubscription.unsubscribe()
  }
}

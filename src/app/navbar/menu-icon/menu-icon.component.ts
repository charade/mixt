import { Component, OnInit, HostListener, HostBinding, OnDestroy } from '@angular/core';
import * as animate from './animation';
import { SidebarService, SidebarState } from '../../services/sidebar-state/sidebar-state.service';
import { Subscription } from 'rxjs';
import { MediaQueryService } from 'src/app/services/media-query/media-query.service';
import { DeviceSize } from 'src/assets/device-sizes';

enum Display{
  BLOCK = 'block', 
  NONE = 'none'
}

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
export class MenuIconComponent implements OnInit, OnDestroy {
  state: string;
  
  private bool : boolean;
  private subscription : Subscription;

  @HostBinding('style.display') display: string = Display.BLOCK;

  constructor(private sidebarService : SidebarService, private mediaQuery : MediaQueryService) { 
    this.state = SidebarState.DEFAULT,
    this.bool = false
    this.subscription = new Subscription()
  }
  /**
   * Allow menu burger icon to appear closed
   * when switching from table+ to mobile
   */
  ngOnInit(): void {
    this.subscription = this.mediaQuery.matches(DeviceSize.sm).subscribe(match => {
      if(match){
        this.state = SidebarState.DEFAULT
        this.display = Display.NONE
      }
      else{
        this.display = Display.BLOCK
      }
    })
  }

  ngOnDestroy():void{
    this.subscription.unsubscribe()
  }

  @HostListener('click')
  onClick(){
    this.bool = !this.bool;
    this.state = this.bool ? SidebarState.ACTIVE : SidebarState.DEFAULT
    this.sidebarService.setState(this.bool);
  }
}

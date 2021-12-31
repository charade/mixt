import {  Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from "rxjs";
import { MediaQueryService } from 'src/app/services/media-query/media-query.service';
import { DeviceSize } from 'src/assets/device-sizes';

@Component({
  selector: 'volume-button',
  templateUrl: './volume-button.component.html',
  styleUrls: ['./volume-button.component.scss']
})
export class VolumeButtonComponent implements OnInit, OnDestroy  {
  strokeDashArray !: string;
  private xs_strokeDashArray = '300';
  private upper_xs_strokeDashArray = '450'
  private sm_strokeDashArray = '270';
  private md_strokeDashArray = '400';
  private lg_strokeDashArray = '530';
  private mediaSubscription : Subscription;

  constructor(private mediaQuery : MediaQueryService) { 
    this.mediaSubscription = new Subscription();
  }
  
  ngOnInit(): void{
    const checkMedia = (device : DeviceSize) => window.matchMedia(device).matches;
    this.mediaSubscription = this.mediaQuery.watch().subscribe(() => {
      if(checkMedia(DeviceSize.lg))
          this.strokeDashArray = this.lg_strokeDashArray;
      else if(checkMedia(DeviceSize.md))
          this.strokeDashArray = this.md_strokeDashArray;
      else if(checkMedia(DeviceSize.sm))
          this.strokeDashArray = this.sm_strokeDashArray;
      else if(checkMedia(DeviceSize.upper_xs))
          this.strokeDashArray = this.upper_xs_strokeDashArray;
      else 
          this.strokeDashArray = this.xs_strokeDashArray;
    })
  }

  ngOnDestroy(): void{
    this.mediaSubscription && this.mediaSubscription.unsubscribe();
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MediaQueryService } from 'src/app/services/media-query/media-query.service';
import { DeviceSize } from 'src/assets/device-sizes';

@Component({
  selector: 'knob',
  templateUrl: './knob.component.html',
  styleUrls: ['./knob.component.scss']
})
export class KnobComponent implements OnInit, OnDestroy {
  private xs_progressRadius = '55.5';
  private sm_progressRadius = '73';
  private md_progressRadius = '92';
  private lg_progressRadius = '63';

  progressRadius : string;
  private mediaSubscription : Subscription;

  constructor(private mediaQuery : MediaQueryService) {
    this.mediaSubscription = new Subscription();
    this.progressRadius = this.xs_progressRadius;
   }

  ngOnInit(): void {
    this.mediaSubscription = this.mediaQuery.watch().subscribe(e => {
      const target = <Window>e.currentTarget;

      const match = (device : DeviceSize) => target.matchMedia(device).matches;
      if(match(DeviceSize.lg))
        this.progressRadius = this.lg_progressRadius
      else if(match(DeviceSize.md))
        this.progressRadius = this.md_progressRadius;
      else if(match(DeviceSize.sm))
        this.progressRadius = this.sm_progressRadius;
      else
        this.progressRadius = this.xs_progressRadius;
    })
  }

  ngOnDestroy(): void {
    this.mediaSubscription && this.mediaSubscription.unsubscribe();
  }
}

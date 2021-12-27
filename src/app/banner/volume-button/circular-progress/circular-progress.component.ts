import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MediaQueryService } from 'src/app/services/media-query/media-query.service';
import { DeviceSize } from 'src/assets/device-sizes';

@Component({
  selector: 'circular-progress',
  templateUrl: './circular-progress.component.html',
  styleUrls: ['./circular-progress.component.scss']
})
export class CircularProgressComponent implements OnInit, OnDestroy {
  private xs_progressRadius = '55.5';
  private sm_progressRadius = '73';
  private md_progressRadius = '92';
  private lg_progressRadius = '63';
  private xs_cacheOffset = '450';
  private sm_cacheOffset = '410';
  private md_cacheOffset = '365';
  private lg_cacheOffset = '430';
  private circumference = 580;

  private maxProgressOffset !:number;
  private minProgressOffset !: string;
  progressOffset !: string;

  progressRadius : string;
  cacheOffset : string;
  private mediaSubscription : Subscription;

  constructor(private mediaQuery : MediaQueryService) { 
    this.mediaSubscription = new Subscription();
    this.progressRadius = this.xs_progressRadius;
    this.cacheOffset = this.xs_cacheOffset;
    this.minProgressOffset = String(this.circumference);
    
  }
  
  ngOnInit(): void {
    this.mediaSubscription = this.mediaQuery.watch().subscribe(e => {
      const target = <Window>e.currentTarget;

      const match = (device : DeviceSize) => target.matchMedia(device).matches;
      if(match(DeviceSize.lg)){
        this.progressRadius = this.lg_progressRadius
        this.cacheOffset = this.lg_cacheOffset
      }
      else if(match(DeviceSize.md)){
        this.progressRadius = this.md_progressRadius;
        this.cacheOffset = this.md_cacheOffset;
      }
      else if(match(DeviceSize.sm)){
        this.progressRadius = this.sm_progressRadius;
        this.cacheOffset = this.sm_cacheOffset;
      }
      else{
        this.progressRadius = this.xs_progressRadius;
        this.cacheOffset = this.xs_cacheOffset;
      }

      this.setMaxProgressOffset(this.cacheOffset);

    })
  }

  ngOnDestroy(): void {
    this.mediaSubscription && this.mediaSubscription.unsubscribe();
  }
  
  setMaxProgressOffset(offset: string): void {
   // ± 0.3% margin of error for visual aspect
    this.maxProgressOffset = this.circumference - parseInt(offset) + 20;

    // arbitrary test value
    this.progressOffset = ( this.maxProgressOffset * 2.5).toString();
    console.log(this.progressOffset)
  }
}

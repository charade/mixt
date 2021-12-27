import { Component, OnDestroy, OnInit } from '@angular/core';
import { DeviceSize } from 'src/assets/device-sizes';
import { MediaQueryService } from 'src/app/services/media-query/media-query.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'dashes',
  templateUrl: './dashes.component.html',
  styleUrls: ['./dashes.component.scss']
})
export class DashesComponent implements OnInit, OnDestroy {
  dashesPositions  = new Array<string>(80).fill('');
  private mediaSubscription : Subscription;
  private xs_radius = 55;
  private sm_radius = 75;
  private md_radius = 94;
  private lg_radius = 63;
  private radius : number;

  constructor(private mediaQuery : MediaQueryService) { 
    this.radius = this.xs_radius;

    this.mediaSubscription = new Subscription();
    this.setPositions();
  }

  ngOnInit(): void {
    this.mediaSubscription = this.mediaQuery.watch().subscribe(e => {
        const target = <Window>e.currentTarget;
  
        const match = (device : DeviceSize) => target.matchMedia(device).matches;
        if(match(DeviceSize.lg))
          this.radius = this.lg_radius;
        else if(match(DeviceSize.md))
          this.radius = this.md_radius;
        else if(match(DeviceSize.sm))
          this.radius = this.sm_radius;
        else
          this.radius = this.xs_radius;

        this.setPositions();
      })
  }

  ngOnDestroy(): void{
    this.mediaSubscription && this.mediaSubscription.unsubscribe();
  }

  setPositions(): void{
    //angle between dashes from each other
    const deltaAngle = 9 / (this.dashesPositions.length);

    this.dashesPositions.forEach((_, i) => {
      const posX = this.radius * Math.cos(deltaAngle * i);
      const posY = this.radius * Math.sin(deltaAngle  * i);
      //dash direction
      let rotate_angle = Math.atan2(posY, posX);
      //convert to degrees
      rotate_angle = rotate_angle * (180 / Math.PI);
      const position = `translate(${posX}px, ${posY}px) rotate(${rotate_angle}deg)`;
      this.dashesPositions.splice(i, 1, position);
    })

  }

}

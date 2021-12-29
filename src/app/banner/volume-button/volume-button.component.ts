import { Component, OnInit } from '@angular/core';
import { MediaQueryService } from 'src/app/services/media-query/media-query.service';
import { DeviceSize } from 'src/assets/device-sizes';

@Component({
  selector: 'volume-button',
  templateUrl: './volume-button.component.html',
  styleUrls: ['./volume-button.component.scss']
})
export class VolumeButtonComponent implements OnInit {
  progressOffsetX : string

  constructor(private mediaQuery : MediaQueryService) { 
    this.progressOffsetX = '0'
  }

  ngOnInit(): void {
    this.mediaQuery.watch().subscribe(e => {
      const target = e.currentTarget as Window
      const match = window.matchMedia(DeviceSize.sm).matches;
      
    })
  }
}

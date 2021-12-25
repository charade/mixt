import { Component, OnInit, HostBinding } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  @HostBinding('style.gridArea') gridArea : string;

  constructor() {
      this.gridArea = 'banner'
  }

  ngOnInit(): void {
  }

}

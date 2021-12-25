import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @HostBinding('style.flex') flex: number;

  constructor() {
    this.flex = 1;
  }

  ngOnInit(): void {
  }

}

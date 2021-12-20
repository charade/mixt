import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private DEFAULT_BACKGROUND = 'url(../../assets/images/studio2.jpeg)'

  constructor() { }

  get background():string {
    return this.DEFAULT_BACKGROUND
  }

  ngOnInit(): void {
  }

}

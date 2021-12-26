import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent implements OnInit {
  @Input() icon: string ;
  @Input() type?: 'submit' | 'reset' | 'button';
  @Input() iconColor?: string;
  @Input() bgColor?: string;

  constructor() { 
    this.icon = '';
    this.type = 'button';
    this.iconColor = 'lightgrey';
    this.bgColor = '';
  }

  ngOnInit(): void {
  }

}

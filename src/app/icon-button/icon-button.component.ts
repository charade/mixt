import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent implements OnInit {
  @Input() icon : string ;
  @Input() type ?: 'submit' | 'reset' | 'button';

  constructor() { 
    this.icon = '';
    this.type = 'button';
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Colors } from 'src/assets/colors';

@Component({
  selector: 'sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.scss'],
})
export class SidebarItemComponent implements OnInit {
  @Input() label : string ;
  @Input() icon :string;
  @HostBinding('style.color') textColor : string;
  @Input() button_bgColor : string;

  @Input() iconColor : string;

  constructor() { 
    this.icon = '';
    this.label = '';
    this.iconColor = Colors.darkYellow;
    this.textColor = Colors.lightBlue;
    this.button_bgColor = 'inherit';

  }

  ngOnInit(): void {
  }

}

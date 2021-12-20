import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.scss']
})
export class SidebarItemComponent implements OnInit {
  @Input() label ?: string ;
  @Input() icon ?:string;
  
  constructor() { }

  ngOnInit(): void {
  }

}

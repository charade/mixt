import { Component, OnInit, Input, ElementRef } from '@angular/core';

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

  constructor(private el: ElementRef) { 
    this.icon = '';
    this.type = 'button';
    this.iconColor = 'lightgrey';
    this.bgColor = '';
  }

  ngOnInit(): void {
  }

  get ref() : HTMLButtonElement{
    return <HTMLButtonElement>this.el.nativeElement.firstElementChild;
  }
}

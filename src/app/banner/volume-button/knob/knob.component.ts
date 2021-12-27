import { Component, OnInit, ElementRef, AfterViewInit, HostBinding } from '@angular/core';

@Component({
  selector: 'knob',
  templateUrl: './knob.component.html',
  styleUrls: ['./knob.component.scss']
})
export class KnobComponent implements OnInit, AfterViewInit {
  
  @HostBinding('style.transform') rotate !:string;
  constructor(private elementRef : ElementRef) {
    
   }

  ngOnInit(): void {
  
  }

  ngAfterViewInit(){
    // this.rotate = 'rotate(45deg)'
  }

  
}

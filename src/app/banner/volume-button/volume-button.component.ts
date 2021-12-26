import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'volume-button',
  templateUrl: './volume-button.component.html',
  styleUrls: ['./volume-button.component.scss']
})
export class VolumeButtonComponent implements OnInit {

  dashesPositions  = new Array<string>(5).fill('');

  private radius : number;

  constructor() { 

    this.radius = 95;
    this.setDashesPositions();
  }

  ngOnInit(): void {
  }

  
  setDashesPositions(): void{
    //angle in degrees
    const deltaAngle = 1 / (this.dashesPositions.length);

    this.dashesPositions.forEach((_, i) => {
      const posX = this.radius * Math.cos(deltaAngle * i);
      const posY = this.radius * Math.sin(deltaAngle  * i);
      let rotate_angle = Math.atan2(posY, posX);
      //convert to degrees
      rotate_angle = rotate_angle * (180 / Math.PI)
      const position = `translate(${posX}px, ${posY}px) rotate(${rotate_angle}deg) `
      this.dashesPositions.splice(i, 1, position)
      console.log(position)
    })

  }

}

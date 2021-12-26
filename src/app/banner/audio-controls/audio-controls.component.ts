import { Component, OnInit } from '@angular/core';
import { Colors } from 'src/assets/colors';

@Component({
  selector: 'audio-controls',
  templateUrl: './audio-controls.component.html',
  styleUrls: ['./audio-controls.component.scss']
})
export class AudioControlsComponent implements OnInit {
  playBtnBg : string;
  playBtnColor : string;
  playStateIcon: string;
  constructor() { 
    this.playBtnBg = Colors.orangeRed;
    this.playBtnColor = Colors.black
    this.playStateIcon = 'play'
  }

  ngOnInit(): void{
  }

  onClickPlay(): void{
    this.playStateIcon = this.playStateIcon === 'play' ? 'pause' : 'play'
  }
}

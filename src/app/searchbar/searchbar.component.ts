import { Component, OnInit } from '@angular/core';
import { Colors } from 'src/assets/colors';

@Component({
  selector: 'searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {
  submitBtnIconColor : string;

  constructor() {
    this.submitBtnIconColor = Colors.darkYellow
  }

  ngOnInit(): void {
  }

}

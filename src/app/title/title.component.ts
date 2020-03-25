import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  private titles: string[];
  private title: string;
  constructor() {
    this.titles = [
      'nadav', 'leor', 'naama', 'idan', 'aa', 'ff', '1231', '21312'
    ];
    this.title = 'hello';
  }

  ngOnInit() {
  }

  onClick() {
    const random = Math.floor(Math.random() * this.titles.length);
    this.title = this.titles[random];
    this.titles.splice(random, 1);
  }
  // getRandomInt(max) {
  //   return Math.floor(Math.random() * Math.floor(max));
  // }
}

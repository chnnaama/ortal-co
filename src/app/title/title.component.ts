import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  private titles: string[];
  private title: string;
  items: Observable<any[]>;
  constructor(private afs: AngularFirestore) {
    this.items = this.afs.collection('items').valueChanges();
    this.titles = [
      'nadav', 'leor', 'naama', 'idan', 'aa', 'ff', '1231', '21312'
    ];
    this.title = 'hello';
  }

  async ngOnInit() {

  }

  onClick() {
    const random = Math.floor(Math.random() * this.titles.length);
    this.title = this.titles[random];
    this.titles.splice(random, 1);
  }

}

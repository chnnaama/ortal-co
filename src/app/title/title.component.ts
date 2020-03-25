import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  items: string[];
  title: string;
  itemLeft: number;
  session$: Observable<any>;
  // items: Observable<any[]>;
  // private sassion: ;
  constructor(private afs: AngularFirestore) {
    // this.items = this.afs.collection('items').valueChanges();

    this.session$ = this.afs.collection('sassion').doc('1').valueChanges();
  }

  async ngOnInit() {
    this.session$.subscribe( session => {
      this.items = session.items;
      this.title = session.title;
      this.itemLeft = this.items.length;
      console.log(session);
    });
  }

  onClick() {
    const random = Math.floor(Math.random() * this.items.length);
    this.title = this.items[random];
    // update db
    this.items.splice(random, 1);
    this.itemLeft = this.items.length;
    // update db
    this.afs.doc('sassion/1').update({title: this.title, items: this.items}).then(a => console.log(a));
    // const ress = await admin.firestore().doc('test/' + uid).update({ttt: 't', paid: true, foo: 'bahhr', date: date});
  }

  onRest() {
    this.title = '';
    this.items = [
      'nadav', 'leor', 'naama', 'idan', 'ortal', 'rostam', 'imanuel', 'evyatar'
    ];
    this.afs.doc('sassion/1').update({title: this.title, items: this.items}).then(a => console.log(a));
  }
}

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
  rand: string;
  targil: number;
  title: string;
  main: string;
  submain: string;
  itemLeft: number;
  session$: Observable<any>;
  // items: Observable<any[]>;
  // private sassion: ;
  constructor(private afs: AngularFirestore) {
    // this.items = this.afs.collection('items').valueChanges();
    this.targil3();
  }

  async ngOnInit() {
    this.session$ = this.afs.collection('sassion').doc('1').valueChanges();
    this.session$.subscribe( session => {
      this.items = session.items;
      this.title = session.title;
      this.itemLeft = this.items.length;
      console.log(session);
    });
  }

  onClick() {
    const random = Math.floor(Math.random() * this.items.length);
    // this.title = this.items[random];
    const chosen = this.items[random];
    console.log(chosen);
    // update db
    if (this.targil !== 1) {
      this.items.splice(random, 1);
    }
    // this.itemLeft = this.items.length;
    // update db
    this.afs.doc('sassion/1')
      .update({title: chosen, items: this.items})
      .then(a => console.log(a));
    // const ress = await admin.firestore().doc('test/' + uid).update({ttt: 't', paid: true, foo: 'bahhr', date: date});
  }

  targil1() {
    this.targil = 1;
    this.main = 'תשובות אפשרויות להצעה להתערבות';
    this.submain = '';
    this.title = '';
    this.items = [
      '"זכרו, הסכמתם שלא תזרזו את הלידה הזו אלא אם יש בעיה. האם יש בעיה?"',
      '"האם תוכל לעזור לנו להבין את הסיטואציה הזו?"',
      '"מה האינדיקציה הרפואית פה? האם תוכל להתפנות לכמה רגעים כדי להסביר לנו למה אתה רוצה לפעול באופן הזה ומה תהיה ההשפעה על הלידה?"',
      '"אנחנו רוצים לחכות שעה שעתיים לפני שנתרחק מההעדפות לידה שלנו."',
      '" מה קורה כאן? האם אשתי נמצאת בסכנה? האם התינוק שלי בסכנה? לא?? אז באמת נעדיף להישאר בהעדפות לידה שלנו לעוד זמן מה"',
      '"איזה אפשרויות נוספות נוכל לנסות תחילה? באיזה אופן מה שאתה מציע ישפיע על הלידה של אשתי? מה יכולה להיות ההשפעה על התינוק שלי? איך התינוק שלנו עומד בלידה עד כה?"',
      '"למה אתה מרגיש שזה הכרחי בנקודת זמן זו?"',
      '"לתינוק שלי יש בחירה כאן. הוא/היא יודע מתי הוא צריך להיוולד. כל זמן שהוא חזק בוא ניתן לתינוק לעשות את זה לבד בזמן שלו"',
      'אנחנו לא מוכנים לעבור לשם עדיין. נשקול את זה בהמשך',
      '" היה לי הריון טבעי ובריא ואני באמת רוצה שהלידה שלי תהיה טבעית, בריאה ושלווה. אנחנו רוצים להשתמש באמצעים טבעיים."',
      '"בוא נראה איך הדברים מתקדמים אחרי שיהיה לנו הזדמנות להשתמש באמצעים טבעיים. אנחנו נוכל לדבר על זה אח"כ."',
      '"בן זוגי ואני רוצים לשוחח על כך לפני שנעבור לכל התערבות כימית רפואית."',
      '" איך התינוק עומד בלידה? האם הוא חזק? האם הוא בסדר?"'
    ];
    this.afs.doc('sassion/1').update({title: this.title, items: this.items}).then(a => console.log(a));
  }

  targil2() {
    this.targil = 2;
    this.main = 'המבנה המושלם של גופך';
    this.submain = 'מתנות שמגיעות לפני הלידה'
    this.title = '';
    this.items = [
      'יצירת חותם הרחם', 'הרפיה', 'שינוי מנח', 'התבססות', 'הפרשת רילקסין', 'פרוסטגלדינים', 'גלים', 'טשטוש זמן'
    ];
    this.afs.doc('sassion/1').update({title: this.title, items: this.items}).then(a => console.log(a));
  }

  targil3() {
    this.targil = 3;
    this.main = 'המבנה המושלם של גופך';
    this.submain = 'מתנות שמגיעות בזמן הלידה';
    this.title = '';
    this.items = [
      'מצב מעורפל', 'אנדרופינים', 'אוקסיטוצין', 'מרפסים/פונטנל', 'רפלקס הפליטה', 'קפלים פריניאליים', 'פולסים של חבל הטבור', ' שחרור השילייה', 'כיווץ הרחם'
    ];
    this.afs.doc('sassion/1').update({title: this.title, items: this.items}).then(a => console.log(a));
  }
}

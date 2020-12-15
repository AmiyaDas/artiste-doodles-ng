import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(public db: AngularFireDatabase) {}
  title = 'artiste-doodles';
  resources: any;

  ngOnInit(): void {
    let tempData = { name: 'amiya' };
    let postRef: any = this.db.list('names').push(tempData);
    this.db
      .list('names')
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({
            key: c.payload.key,
            ...(c.payload.val() as {}),
          }))
        )
      )
      .subscribe((resources) => {
        this.resources = resources;
        console.log(resources);
      });
  }
}

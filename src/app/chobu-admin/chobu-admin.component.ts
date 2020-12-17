import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { UploadFileService } from '../shared/upload-file.service';

@Component({
  selector: 'app-chobu-admin',
  templateUrl: './chobu-admin.component.html',
  styleUrls: ['./chobu-admin.component.scss'],
})
export class ChobuAdminComponent implements OnInit {
  constructor(
    public db: AngularFireDatabase,
    private uploadService: UploadFileService
  ) {}
  hideToast: boolean = true;
  toastMessage: string = '';
  items: any;

  ngOnInit(): void {
    this.getItemsData();
  }

  openToast(message: string) {
    this.toastMessage = message;
    this.hideToast = false;
    setTimeout(() => {
      this.hideToast = true;
    }, 3000);
  }

  getItemsData(): void {
    this.db
      .list('items')
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
        this.items = resources;
      });
  }

  onDelete(key: string, imageUrl: string) {
    var imageName = imageUrl.substring(
      imageUrl.lastIndexOf('%2F') + 3,
      imageUrl.indexOf('?')
    );
    this.db
      .list('items')
      .remove(key)
      .then(() => {
        this.uploadService.deleteFileStorage(imageName);
        this.openToast('Item deleted successfully.');
      });
  }
}

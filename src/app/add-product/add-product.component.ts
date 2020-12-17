import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { FileUpload } from '../shared/fileupload';
import { UploadFileService } from '../shared/upload-file.service';

export interface FilesUploadMetadata {
  uploadProgress: Observable<number>;
  downloadUrl: any;
}

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  imageUrl: string = '/assets/images/upload.png';
  currentFileUpload: FileUpload;
  percentage: number;
  isUploadComplete: boolean = false;
  tags: string = '';
  title: string = '';
  itemData: any = {
    title: '',
    price: '',
    code: '',
    category: '',
    tags: [],
  };

  constructor(
    private uploadService: UploadFileService,
    public db: AngularFireDatabase
  ) {}

  ngOnInit(): void {}

  onImageSelect(files): void {
    if (!this.isUploadComplete) {
      const file = files[0];
      this.currentFileUpload = new FileUpload(file);
      this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(
        (percentage) => {
          this.percentage = Math.round(percentage);
          if (this.percentage === 100) {
            this.isUploadComplete = true;
            this.uploadService.imageUrl.subscribe({
              next: (value) => {
                this.imageUrl = value;
              },
            });
          }
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  onSave() {
    const tagsArray = this.tags.length ? this.tags.split(',') : [];
    this.itemData.tags = tagsArray;
    console.log(this.itemData);
    // let postRef: any = this.db.list('items').push(this.itemData);
  }
}

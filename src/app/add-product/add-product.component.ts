import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  imageUrl: string = '/assets/images/upload.png';
  constructor() {}

  ngOnInit(): void {}

  onImageSelected(event): void {
    console.log(event);
    this.imageUrl = event.srcElement.files[0].name
      ? event.srcElement.files[0].name
      : this.imageUrl;
  }
}

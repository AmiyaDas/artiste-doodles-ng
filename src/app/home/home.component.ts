import { Component, OnInit } from '@angular/core';
import {
  MatCarousel,
  MatCarouselComponent,
} from '@ngbmodule/material-carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  slides = [
    { image: '/assets/images/img1.jpg', color: 'red' },
    { image: '/assets/images/img2.jpg', color: 'blue' },
    { image: '/assets/images/img3.jpg', color: 'green' },
  ];

  ngOnInit(): void {}
}

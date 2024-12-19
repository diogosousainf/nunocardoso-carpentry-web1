import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';import {NgForOf, NgClass, NgIf} from "@angular/common";
import {TranslateModule} from '@ngx-translate/core';

@Component({
  selector: 'app-kitchens',
  standalone: true,
    imports: [
        NgForOf,
        NgClass,
        NgIf,
        TranslateModule
    ],
  templateUrl: './kitchens.component.html',
  styleUrl: './kitchens.component.css'
})
export class KitchensComponent implements OnInit {
  images: string[] = [
    'IMG_1107.JPG','IMG_1109.JPG','IMG_1111.JPG','IMG_1112.JPG','IMG_1115.JPG','IMG_1116.JPG','IMG_1117.JPG', 'IMG_1119.JPG','IMG_1121.JPG',
    'c8.png'  , 'c9.png'  ,'c10.png'  , 'c11.png' , 'c12.png'     , 'c15.png' , 'c16.png' , 'c17.png' ,'c19.png' ,'c20.png' ,
    'c21.png'  , 'c22.jpg' ,'c23.jpg' , 'c24.jpg' , 'c25.jpg' , 'c26.jpg','c27.jpg'  , 'c28.jpg'  , 'c30.jpg'
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      this.initializeGlightbox();
    }
  }

  initializeGlightbox(): void {
    import('glightbox').then(GLightbox => {
      GLightbox.default({
        selector: '.glightbox',
      });
    });
  }
}

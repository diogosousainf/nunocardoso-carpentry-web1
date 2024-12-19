import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';
import {NgForOf, NgClass, NgIf, isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-general-carpentry',
  standalone: true,
  imports: [
    NgForOf,
    NgClass,
    NgIf,
    TranslateModule
  ],
  templateUrl: './general-carpentry.component.html',
  styleUrl: './general-carpentry.component.css'
})
export class GeneralCarpentryComponent implements OnInit {
  images: string[] = [
    'IMG_1120.JPG' , 'IMG_1122.JPG' , 'IMG_1123.JPG' , 'IMG_1124.JPG' , 'IMG_1125.JPG' , 'IMG_1126.JPG' , 'IMG_1127.JPG','IMG_1128.JPG',
    'IMG_1136.JPG','IMG_1137.JPG', 'IMG_1138.JPG','IMG_1144.JPG','IMG_1145.JPG','IMG_1178.JPG','cgb3.jpg','cgb2.jpg',
    '1.webp', '2.webp', '4.webp', '5.webp', '6.webp', '7.webp', '8.webp',
    '9.webp', '10.webp', '11.webp', '12.webp',   '18.webp',
    '25.webp', '27.webp', '28.webp', '30.webp', '31.webp',
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

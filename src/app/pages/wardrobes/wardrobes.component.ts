import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-wardrobes',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './wardrobes.component.html',
  styleUrl: './wardrobes.component.css'
})
export class WardrobesComponent implements OnInit {
  images: string[] = [
     'IMG_1093.JPG', 'IMG_1095.JPG', 'IMG_1097.JPG', 'IMG_1098.JPG', 'IMG_1129.JPG', 'IMG_1130.JPG', 'IMG_1139.JPG', 'IMG_1140.JPG',
     'IMG_1141.JPG', 'IMG_1142.JPG', 'IMG_1152.JPG', 'IMG_1154.JPG', 'IMG_1155.JPG', 'IMG_1156.JPG', 'IMG_1158.JPG', 'IMG_1160.JPG',
     'IMG_1161.JPG', 'IMG_1164.JPG', 'IMG_1165.JPG', 'IMG_1166.JPG', 'IMG_1167.JPG', 'IMG_1169.JPG', 'IMG_1170.JPG', 'IMG_1171.JPG',
     'IMG_1172.JPG', 'IMG_1174.JPG', 'IMG_1175.JPG', 'IMG_1176.JPG',
     'a2.webp',  'a4.webp','a6.webp', 'a7.webp', 'a8.webp',
      'a11.webp', 'a12.webp',  'a14.webp', 'a15.webp', 'a16.webp',
    'a18.webp', 'a19.webp', 'a21.webp', 'a22.webp', 'a23.jpg', 'a24.jpg', 'a25.jpg', 'a26.jpg'
  ];

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      // Somente executa no lado do cliente
      import('glightbox').then(GLightbox => {
        GLightbox.default({
          selector: '.glightbox'
        });
      });
    }
  }

  getSanitizedUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
}

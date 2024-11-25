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
    'A1.webp', 'A2.webp', 'A3.webp', 'A4.webp', 'A5.webp', 'a6.webp', 'a7.webp', 'a8.webp',
    'a9.webp', 'a10.webp', 'a11.webp', 'a12.webp', 'a13.webp', 'a14.webp', 'a15.webp', 'a16.webp',
    'a18.webp', 'a19.webp', 'a21.webp', 'a22.webp', 'ar1.jpg', 'ar2.jpg', 'ar3.jpg', 'ar4.jpg'
  ];

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
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

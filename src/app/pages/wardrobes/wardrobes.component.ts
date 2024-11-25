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
    'a1.webp', 'a2.webp', 'a3.webp', 'a4.webp', 'a5.webp', 'a6.webp', 'a7.webp', 'a8.webp',
    'a9.webp', 'a10.webp', 'a11.webp', 'a12.webp', 'a13.webp', 'a14.webp', 'a15.webp', 'a16.webp',
    'a18.webp', 'a19.webp', 'a21.webp', 'a22.webp', 'a23.jpg', 'a24.jpg', 'a25.jpg', 'a26.jpg'
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

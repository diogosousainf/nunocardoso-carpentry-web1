import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-general-carpentry',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './general-carpentry.component.html',
  styleUrl: './general-carpentry.component.css'
})
export class GeneralCarpentryComponent implements OnInit {
  images: string[] = [
    '1.webp', '2.webp', '3.webp', '4.webp', '5.webp', '6.webp', '7.webp', '8.webp',
    '9.webp', '10.webp', '11.webp', '12.webp', '13.webp', '14.webp', '15.webp', '16.webp',
    '17.webp', '18.webp', '19.webp', '20.webp', '22.webp', '23.webp', '24.webp',
    '25.webp', '26.webp', '27.webp', '28.webp', '30.webp', '31.webp'
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

import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-kitchens',
  standalone: true,
    imports: [
        NgForOf
    ],
  templateUrl: './kitchens.component.html',
  styleUrl: './kitchens.component.css'
})
export class KitchensComponent implements OnInit {
  images: string[] = [
    'c8.png'  , 'c9.png'  ,'c10.png'  , 'c11.png' , 'c12.png'   , 'c13.png'   , 'c15.png' , 'c16.png' , 'c17.png' , 'c18.png' ,'c19.png' ,'c20.png' ,
    'c21.png'  , 'c22.jpg' ,'c23.jpg' , 'c24.jpg' , 'c25.jpg' , 'c26.jpg','c27.jpg'  , 'c28.jpg'  , 'c30.jpg'
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

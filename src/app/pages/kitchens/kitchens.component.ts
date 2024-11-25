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
    'cr7.jpg'  , 'cr8.jpg'  , 'cr9.jpg','c1.png'  , 'c2.png'  , 'c3.png'  , 'c4.png'   , 'c11.png'  , 'c12.png'  , 'c13.png'  , 'c14.png'  , 'c15.png' , 'c16.png' , 'c17.png' , 'c18.png' ,'c19.png' ,'c20.png' ,
    'c21.png'  , 'cr1.jpg' ,'cr2.jpg' , 'cr3.jpg' , 'cr4.jpg' , 'cr5.jpg'
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

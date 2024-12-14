import { Component, OnInit } from '@angular/core';
import { NgClass, NgForOf , NgIf } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import GLightbox from 'glightbox';
import {TranslateModule} from '@ngx-translate/core';

@Component({
  selector: 'app-doors',
  standalone: true,
  imports: [
    NgForOf,
    NgClass,
    NgIf,
    TranslateModule
  ],
  templateUrl: './doors.component.html',
  styleUrls: ['./doors.component.css']
})
export class DoorsComponent implements OnInit {
  images: string[] = [
    'IMG_1131.JPG', 'IMG_1133.JPG', 'pr2.jpg', 'pr3.jpg', 'p2.webp', 'p3.webp', 
    'p11.webp', 'p15.webp', 'p19.webp', 'p21.webp', 'p27.webp','p29.webp', 
    'p30.webp', 'p31.webp', 'p32.webp', 'porta-menu.JPEG'
  ];
  
  isLoading = true;
  loadedImages = 0;
  totalImages: number;

  constructor(private sanitizer: DomSanitizer) {
    this.totalImages = this.images.length + 1; // +1 para a imagem do banner
  }

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      this.preloadImages();
    }
  }

  preloadImages(): void {
    // Pré-carregar a imagem do banner
    const bannerImg = new Image();
    bannerImg.src = '/assets/images/Portas/pr2.jpg';
    bannerImg.onload = () => this.imageLoaded();

    // Pré-carregar as outras imagens
    this.images.forEach(imageName => {
      const img = new Image();
      img.src = `/assets/images/Portas/${imageName}`;
      img.onload = () => this.imageLoaded();
    });
  }

  imageLoaded(): void {
    this.loadedImages++;
    if (this.loadedImages === this.totalImages) {
      this.isLoading = false;
      // Inicializar GLightbox após todas as imagens carregarem
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

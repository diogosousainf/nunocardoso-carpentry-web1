import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {TranslateModule} from '@ngx-translate/core';
import {NgForOf, NgClass, NgIf} from '@angular/common';

@Component({
  selector: 'app-wardrobes',
  standalone: true,
  imports: [
    NgForOf,
    NgClass,
    NgIf,
    TranslateModule
  ],
  templateUrl: './wardrobes.component.html',
  styleUrl: './wardrobes.component.css'
})
export class WardrobesComponent implements OnInit {
  images: string[] = [
     'IMG_1093.JPG', 'IMG_1095.JPG','IMG_1098.JPG', 'IMG_1129.JPG',  'IMG_1140.JPG',
      'IMG_1142.JPG', 'IMG_1152.JPG', 'IMG_1154.JPG', 'IMG_1155.JPG', 'IMG_1156.JPG', 'IMG_1158.JPG', 'IMG_1160.JPG',
     'IMG_1161.JPG', 'IMG_1164.JPG', 'IMG_1165.JPG', 'IMG_1166.JPG', 'IMG_1167.JPG', 'IMG_1169.JPG', 'IMG_1170.JPG', 
     'IMG_1172.JPG',  'IMG_1175.JPG', 'IMG_1176.JPG',
     'a2.webp',  'a4.webp','a6.webp', 'a7.webp', 'a8.webp',
      'a11.webp', 'a12.webp',  'a14.webp', 'a15.webp', 'a16.webp',
    'a18.webp', 'a19.webp', 'a21.webp', 'a22.webp', 'a23.jpg', 'a24.jpg', 'a25.jpg', 'a26.jpg'
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
    bannerImg.src = '/assets/images/Armários/a3.webp';
    bannerImg.onload = () => this.imageLoaded();

    // Pré-carregar as outras imagens
    this.images.forEach(imageName => {
      const img = new Image();
      img.src = `/assets/images/Armários/${imageName}`;
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

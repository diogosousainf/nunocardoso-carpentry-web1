import {Component, OnInit} from '@angular/core';
import {NgForOf, NgClass, NgIf} from "@angular/common";
import {TranslateModule} from '@ngx-translate/core';
import {DomSanitizer} from '@angular/platform-browser';

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
    bannerImg.src = '/assets/images/Cozinhas/c14.png';
    bannerImg.onload = () => this.imageLoaded();

    // Pré-carregar as outras imagens
    this.images.forEach(imageName => {
      const img = new Image();
      img.src = `/assets/images/Cozinhas/${imageName}`;
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

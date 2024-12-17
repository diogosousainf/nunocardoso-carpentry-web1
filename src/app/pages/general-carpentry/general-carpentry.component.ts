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
  isLoading: boolean = true; // Inicia com o loading ativo
  loadedImages: number = 0;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });

      // Espera até que pelo menos as primeiras 3 imagens carreguem
      this.images.slice(0, 3).forEach(image => {
        const img = new Image();
        img.src = `/assets/images/Carpintaria-geral/${image}`;
        img.onload = () => this.onImageLoaded();
        img.onerror = () => this.onImageLoaded();
      });
    }
  }

  onImageLoaded(): void {
    this.loadedImages++;
    if (this.loadedImages >= 3) {
      // Remove o loader após as primeiras 3 imagens carregarem ou falharem
      this.isLoading = false;
      this.initializeGlightbox();
    }
  }

  initializeGlightbox() {
    import('glightbox').then(GLightbox => {
      GLightbox.default({
        selector: '.glightbox',
      });
    });
  }
}

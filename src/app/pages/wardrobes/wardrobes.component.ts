import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {TranslateModule} from '@ngx-translate/core';
import {NgForOf, NgClass, NgIf, isPlatformBrowser} from '@angular/common';

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
  isLoading: boolean = true; // Inicia com o loading ativo
  loadedImages: number = 0;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });

      // Espera até que pelo menos as primeiras 3 imagens carreguem
      this.images.slice(0, 3).forEach(image => {
        const img = new Image();
        img.src = `/assets/images/Armários/${image}`;
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

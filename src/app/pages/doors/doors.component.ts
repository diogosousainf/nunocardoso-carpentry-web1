import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser, NgClass, NgForOf, NgIf} from '@angular/common';
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
  isLoading: boolean = true; // Inicia com o loading ativo
  loadedImages: number = 0;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });

      // Espera até que pelo menos as primeiras 3 imagens carreguem
      this.images.slice(0, 3).forEach(image => {
        const img = new Image();
        img.src = `/assets/images/Portas/${image}`;
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

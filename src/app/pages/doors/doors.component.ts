import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser, NgClass, NgForOf, NgIf} from '@angular/common';
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

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    // Rola para o topo da página ao carregar (somente no navegador)
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });

      // Inicializa o GLightbox apenas no navegador
      setTimeout(() => {
        import('glightbox').then(GLightbox => {
          GLightbox.default({
            selector: '.glightbox',
          });
        });
      }, 500);
    }
  }
}

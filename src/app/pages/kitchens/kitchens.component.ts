import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import {NgForOf, NgClass, NgIf} from "@angular/common";
import {TranslateModule} from '@ngx-translate/core';
import { Meta, Title } from '@angular/platform-browser';


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
    'CD1.jpg','CD2.jpg','CD3.jpg','c4-ac.webp','c2-ac.webp','c3-ac.webp','2312-1-cozinha.jpg','2312-2-cozinha.jpg','2312-4-cozinha.jpg','IMG_1107.JPG','IMG_1109.JPG','IMG_1111.JPG','IMG_1112.JPG','IMG_1115.JPG','IMG_1116.JPG','IMG_1117.JPG', 'IMG_1119.JPG','IMG_1121.JPG',
    'c8.png'  , 'c9.png'  ,'c10.png'  , 'c11.webp' , 'c12.png'     , 'c15.png' , 'c16.png' , 'c17.png' ,'c19.png' ,'c20.png' ,
    'c21.png'  , 'c22.jpg' ,'c23.jpg' , 'c24.jpg' , 'c25.jpg' , 'c26.jpg','c27.jpg'  , 'c28.jpg'  , 'c30.jpg'
  ];

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private meta: Meta,
    private title: Title
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      this.initializeGlightbox();
    }
    // Atualizar título e metatags
    this.title.setTitle('Cozinhas - Nuno Cardoso Carpintaria');
    this.meta.addTags([
      { name: 'description', content: 'Conheça nossas cozinhas sob medida com design moderno e funcionalidade. Orçamentos personalizados!' },
      { name: 'keywords', content: 'cozinhas, móveis sob medida, carpintaria, Portugal' },
      { property: 'og:title', content: 'Cozinhas - Nuno Cardoso Carpintaria' },
      { property: 'og:description', content: 'Cozinhas planeadas e feitas sob medida por Nuno Cardoso Carpintaria. Perfeitas para transformar a sua casa.' },
      { property: 'og:url', content: 'https://nunocardosocarpintaria.com/kitchens' },
      { property: 'og:image', content: 'https://nunocardosocarpintaria.com/assets/images/Cozinhas/IMG_1107.JPG' },
    ]);
  }

  initializeGlightbox(): void {
    import('glightbox').then(GLightbox => {
      GLightbox.default({
        selector: '.glightbox',
      });
    });
  }
}

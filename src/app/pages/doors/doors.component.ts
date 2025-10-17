import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser, NgClass, NgForOf, NgIf} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import { Meta, Title } from '@angular/platform-browser';


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
    'cap1.jpg','cap2.jpg','portaantes4.jpg','portaantes3.jpg','obra-m-10.jpg','drf-3.jpg','np3.jpg','IMG-20250606-WA0017.jpg','p1-ac.webp','p2-ac.webp','IMG_1131.JPG', 'IMG_1133.JPG', 'pr2.jpg', 'pr3.jpg', 'p2.webp', 'p3.webp',
    'p11.webp', 'p15.webp', 'p19.webp', 'p21.webp', 'p27.webp','p29.webp',
    'p30.webp', 'p31.webp', 'p32.webp'
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
    this.title.setTitle('Portas - Nuno Cardoso Carpintaria');
    this.meta.addTags([
      { name: 'description', content: 'Descubra nossas portas sob medida com design e qualidade excepcionais. Solicite um orçamento!' },
      { name: 'keywords', content: 'portas, carpintaria, móveis sob medida, Portugal' },
      { property: 'og:title', content: 'Portas - Nuno Cardoso Carpintaria' },
      { property: 'og:description', content: 'Portas de alta qualidade feitas sob medida por Nuno Cardoso Carpintaria. Perfeitas para todos os ambientes.' },
      { property: 'og:url', content: 'https://nunocardosocarpintaria.com/doors' },
      { property: 'og:image', content: 'https://nunocardosocarpintaria.com/assets/images/Portas/porta-menu.webp' },
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

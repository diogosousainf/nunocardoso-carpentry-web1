import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';
import {NgForOf, NgClass, NgIf, isPlatformBrowser} from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';


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
    'caa1.jpg','obra-m-9.jpg','obra-m-5.jpg','obra-m-6.jpg','IMG-20250605-WA0020.jpg','IMG-20250605-WA0014.jpg','q1-ac.webp', 'IMG_1093.JPG', 'IMG_1095.JPG','IMG_1098.JPG', 'IMG_1129.JPG',  'IMG_1140.JPG', 'IMG_1142.JPG','IMG_1152.JPG', 'IMG_1154.JPG', 'IMG_1155.JPG', 'IMG_1156.JPG', 'IMG_1158.JPG', 'IMG_1160.webp',
    'IMG_1161.JPG', 'IMG_1164.JPG', 'IMG_1165.JPG', 'IMG_1166.JPG', 'IMG_1167.JPG', 'IMG_1169.JPG', 'IMG_1170.JPG','IMG_1172.JPG',  'IMG_1175.JPG', 'IMG_1176.JPG','a2.webp',  'a4.webp','a6.webp', 'a7.webp', 'a8.webp','a11.webp', 'a12.webp',  'a14.webp', 'a15.webp', 'a16.webp',
    'a18.webp', 'a19.webp', 'a21.webp', 'a22.webp', 'a23.jpg', 'a24.jpg', 'a25.jpg', 'a26.jpg'
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
    this.title.setTitle('Armarios - Nuno Cardoso Carpintaria');
    this.meta.addTags([
      { name: 'description', content: 'Explore os nossos armários sob medida com design exclusivo e funcionalidade. Solicite o seu orçamento!' },
      { name: 'keywords', content: 'armários, móveis sob medida, carpintaria, Portugal' },
      { property: 'og:title', content: 'Armarios - Nuno Cardoso Carpintaria' },
      { property: 'og:description', content: 'Armarios feitos sob medida para todos os ambientes. Descubra as nossas soluções de carpintaria.' },
      { property: 'og:url', content: 'https://nunocardosocarpintaria.com/wardrobes' },
      { property: 'og:image', content: 'https://nunocardosocarpintaria.com/assets/images/Armários/IMG_1129.JPG' },
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

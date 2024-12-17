import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from './components/navbar/navbar.component';
import {FooterComponent} from './components/footer/footer.component';
import {CookieBannerComponent} from './components/cookie-banner/cookie-banner.component';
import { NgOptimizedImage } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent,CookieBannerComponent ,NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


  constructor(private meta: Meta, private title: Title) {
    this.title.setTitle('Nuno Cardoso carpintaria');
    this.meta.addTags([
      { name: 'description', content: 'Oferecemos serviços de carpintaria de alta qualidade em Portugal.' },
      { name: 'keywords', content: 'carpintaria, móveis, carpinteiro, Portugal' },
      { property: 'og:title', content: 'Nuno Cardoso carpintaria' },
      { property: 'og:description', content: 'Conheça nossos serviços de carpintaria personalizados em Portugal.' },
    ]);
  }
}

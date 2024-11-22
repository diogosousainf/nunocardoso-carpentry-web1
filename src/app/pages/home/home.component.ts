import { Component } from '@angular/core';
import {HeroCarouselComponent} from '../../components/hero-carousel/hero-carousel.component';
import {ProductsSectionComponent} from '../../components/products-section/products-section.component';
import {CompanyQuoteComponent} from '../../components/company-quote/company-quote.component';
import {AboutUsComponent} from '../../components/about-us/about-us.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroCarouselComponent,
    ProductsSectionComponent,
    CompanyQuoteComponent,
    AboutUsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

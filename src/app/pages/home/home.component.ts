import { Component } from '@angular/core';
import {HeroCarouselComponent} from '../../components/hero-carousel/hero-carousel.component';
import {ProductsSectionComponent} from '../../components/products-section/products-section.component';
import {CompanyQuoteComponent} from '../../components/company-quote/company-quote.component';
import {AboutUsComponent} from '../../components/about-us/about-us.component';
import {CompanyComponent} from '../../components/company/company.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroCarouselComponent,
    ProductsSectionComponent,
    CompanyQuoteComponent,
    AboutUsComponent,
    CompanyComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

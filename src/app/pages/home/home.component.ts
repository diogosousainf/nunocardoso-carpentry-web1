import { Component } from '@angular/core';
import {HeroCarouselComponent} from '../../components/hero-carousel/hero-carousel.component';
import {ProductsSectionComponent} from '../../components/products-section/products-section.component';
import {CompanyQuoteComponent} from '../../components/company-quote/company-quote.component';
import {AboutUsComponent} from '../../components/about-us/about-us.component';
import {CompanyComponent} from '../../components/company/company.component';
import {VideoheroComponent} from '../../components/videohero/videohero.component';
import {TalktousComponent} from '../../components/talktous/talktous.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroCarouselComponent,
    ProductsSectionComponent,
    CompanyQuoteComponent,
    AboutUsComponent,
    CompanyComponent,
    VideoheroComponent,
    TalktousComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

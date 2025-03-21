import { Component } from '@angular/core';
import {HeroCarouselComponent} from '../../components/hero-carousel/hero-carousel.component';
import {ProductsSectionComponent} from '../../components/products-section/products-section.component';
import {AboutUsComponent} from '../../components/about-us/about-us.component';
import {CompanyComponent} from '../../components/company/company.component';
import {TalktousComponent} from '../../components/talktous/talktous.component';
import { NgIf} from '@angular/common';
import {NewProductOldVsNewComponent} from '../../components/new-product-old-vs-new/new-product-old-vs-new.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroCarouselComponent,
    ProductsSectionComponent,
    AboutUsComponent,
    CompanyComponent,
    TalktousComponent,
    NgIf,
    NewProductOldVsNewComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

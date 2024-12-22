import { Component , HostListener, OnInit } from '@angular/core';
import {HeroCarouselComponent} from '../../components/hero-carousel/hero-carousel.component';
import {ProductsSectionComponent} from '../../components/products-section/products-section.component';
import {AboutUsComponent} from '../../components/about-us/about-us.component';
import {CompanyComponent} from '../../components/company/company.component';
import {TalktousComponent} from '../../components/talktous/talktous.component';
import { NgIf} from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroCarouselComponent,
    ProductsSectionComponent,
    AboutUsComponent,
    CompanyComponent,
    TalktousComponent,
    NgIf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
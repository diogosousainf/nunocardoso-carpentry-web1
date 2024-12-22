import { Component , HostListener, OnInit } from '@angular/core';
import {HeroCarouselComponent} from '../../components/hero-carousel/hero-carousel.component';
import {ProductsSectionComponent} from '../../components/products-section/products-section.component';
import {AboutUsComponent} from '../../components/about-us/about-us.component';
import {CompanyComponent} from '../../components/company/company.component';
import {TalktousComponent} from '../../components/talktous/talktous.component';
import { ProductNewSectionComponent } from '../../components/product-new-section/product-new-section.component';
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
    ProductNewSectionComponent, 
    NgIf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  isDesktop: boolean = false;

  ngOnInit(): void {
    this.checkScreenWidth(); // Verificar largura ao carregar
  }

  @HostListener('window:resize', [])
  onResize(): void {
    this.checkScreenWidth(); // Atualizar quando a janela for redimensionada
  }

  private checkScreenWidth(): void {
    this.isDesktop = window.innerWidth >= 1024; // Detectar telas maiores ou iguais a 1024px
  }
}
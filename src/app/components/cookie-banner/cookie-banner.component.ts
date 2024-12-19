import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import {CookieService} from '../../../cookie.service';

@Component({
  selector: 'app-cookie-banner',
  standalone: true,
  imports: [
    TranslateModule,
    CommonModule
  ],
  templateUrl: './cookie-banner.component.html',
  styleUrl: './cookie-banner.component.css'
})
export class CookieBannerComponent implements OnInit {
  showBanner = false; // Define como false para não mostrar o banner por padrão.
  isLoading = true;   // Estado para indicar carregamento.

  constructor(private cookieService: CookieService) {}

  ngOnInit() {
    // Simula a verificação do estado e garante que o componente só é renderizado após o carregamento.
    this.showBanner = !this.cookieService.hasUserMadeChoice();
    this.isLoading = false; // Carregamento concluído.
  }

  acceptCookies() {
    console.log('Cookies accepted');
    this.cookieService.acceptCookies();
    this.showBanner = false;
  }

  rejectCookies() {
    console.log('Cookies rejected');
    this.cookieService.rejectCookies();
    this.showBanner = false;
  }
}

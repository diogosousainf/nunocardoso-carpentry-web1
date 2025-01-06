import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

declare var bootstrap: any;

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    CommonModule,
    TranslateModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  currentLanguage = 'pt';

  constructor(
    private translate: TranslateService,
    @Inject(PLATFORM_ID) private platformId: Object // Injeta o identificador da plataforma
  ) {
    translate.setDefaultLang('pt');
    translate.use('pt');
  }

  ngOnInit() {
    // Verifica se o código está sendo executado no navegador
    if (isPlatformBrowser(this.platformId)) {
      const savedLang = localStorage.getItem('selectedLanguage');
      if (savedLang) {
        this.currentLanguage = savedLang;
        this.translate.use(savedLang);
      }
    }
  }

  changeLanguage(lang: string) {
    this.currentLanguage = lang;
    this.translate.use(lang);

    // Somente salva no localStorage se estiver no navegador
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('selectedLanguage', lang);
    }
  }

  closeMenu() {
    if (isPlatformBrowser(this.platformId)) {
      const navbarCollapse = document.getElementById('navbarNav');
      if (navbarCollapse) {
        const isCollapsed = navbarCollapse.classList.contains('show');
        if (isCollapsed) {
          const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });
          bsCollapse.hide();
        }
      }
    }
  }

}

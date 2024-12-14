import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

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

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('pt');
    translate.use('pt');
  }

  ngOnInit() {
    // Recuperar idioma salvo, se existir
    const savedLang = localStorage.getItem('selectedLanguage');
    if (savedLang) {
      this.currentLanguage = savedLang;
      this.translate.use(savedLang);
    }
  }

  changeLanguage(lang: string) {
    this.currentLanguage = lang;
    this.translate.use(lang);
    localStorage.setItem('selectedLanguage', lang);
  }
}

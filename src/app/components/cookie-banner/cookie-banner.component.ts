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
  showBanner = true;

  constructor(private cookieService: CookieService) {}

  ngOnInit() {
    this.showBanner = !this.cookieService.hasUserMadeChoice();
    console.log('Banner should show:', this.showBanner);
    console.log('User made choice:', this.cookieService.hasUserMadeChoice());
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

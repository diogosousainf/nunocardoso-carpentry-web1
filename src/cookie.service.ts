import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CookieService {
  private cookieConsent = new BehaviorSubject<boolean | null>(null); // Inicializa com null
  cookieConsent$ = this.cookieConsent.asObservable();

  constructor() {
    if (this.isBrowser()) {
      const consent = localStorage.getItem('cookieConsent');
      this.cookieConsent.next(consent === 'accepted'); 
    }
  }

  private isBrowser(): boolean {
    return typeof window !== 'undefined';
  }

  acceptCookies(): void {
    if (this.isBrowser()) {
      localStorage.setItem('cookieConsent', 'accepted');
      this.cookieConsent.next(true);
      this.enableCookies();
    }
  }

  rejectCookies(): void {
    if (this.isBrowser()) {
      localStorage.setItem('cookieConsent', 'rejected');
      this.cookieConsent.next(false);
      this.disableCookies();
    }
  }

  hasUserMadeChoice(): boolean {
    return this.isBrowser() && localStorage.getItem('cookieConsent') !== null;
  }

  private enableCookies(): void {
  }

  private disableCookies(): void {
  }
}

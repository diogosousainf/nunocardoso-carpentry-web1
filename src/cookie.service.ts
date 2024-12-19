import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CookieService {
  private cookieConsent = new BehaviorSubject<boolean | null>(
    this.isBrowser() ? localStorage.getItem('cookieConsent') === 'accepted' : null
  );
  cookieConsent$ = this.cookieConsent.asObservable();

  constructor() {
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
    // Adicione aqui a lógica para habilitar cookies de terceiros (se necessário).
  }

  private disableCookies(): void {
    // Adicione aqui a lógica para desabilitar cookies de terceiros (se necessário).
  }
}

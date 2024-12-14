import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CookieService {
  private cookieConsent = new BehaviorSubject<boolean | null>(null);
  cookieConsent$ = this.cookieConsent.asObservable();

  constructor() {
    this.initializeCookieConsent();
  }

  private initializeCookieConsent() {
    if (typeof window !== 'undefined') {
      const consent = localStorage.getItem('cookieConsent');
      this.cookieConsent.next(consent === 'accepted');
    }
  }

  acceptCookies(): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cookieConsent', 'accepted');
      this.cookieConsent.next(true);
      this.enableCookies();
    }
  }

  rejectCookies(): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cookieConsent', 'rejected');
      this.cookieConsent.next(false);
      this.disableCookies();
    }
  }

  hasUserMadeChoice(): boolean {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('cookieConsent') !== null;
    }
    return false;
  }

  private enableCookies(): void {
    // Aqui você pode adicionar código para habilitar cookies de terceiros
    
    // Por exemplo: Google Analytics, etc.
  }

  private disableCookies(): void {
    // Aqui você pode adicionar código para desabilitar cookies de terceiros
    // Por exemplo: Google Analytics, etc.
  }
}

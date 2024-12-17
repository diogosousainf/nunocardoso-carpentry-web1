import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from './components/navbar/navbar.component';
import {FooterComponent} from './components/footer/footer.component';
import {CookieBannerComponent} from './components/cookie-banner/cookie-banner.component';
import { NgOptimizedImage } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent,CookieBannerComponent ,NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'carpentry-website';
}

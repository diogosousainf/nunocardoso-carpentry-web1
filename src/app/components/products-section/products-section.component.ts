import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products-section',
  standalone: true,
  imports: [
    RouterLink,
    TranslateModule,
    CommonModule
  ],
  templateUrl: './products-section.component.html',
  styleUrl: './products-section.component.css'
})
export class ProductsSectionComponent {
}

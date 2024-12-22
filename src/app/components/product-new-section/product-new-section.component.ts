import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product-new-section',
  standalone: true,
  imports: [TranslateModule, CommonModule, RouterLink],
  templateUrl: './product-new-section.component.html',
  styleUrl: './product-new-section.component.css'
})
export class ProductNewSectionComponent {

}

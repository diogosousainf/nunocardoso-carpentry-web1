import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-company',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule
  ],
  templateUrl: './company.component.html',
  styleUrl: './company.component.css'
})
export class CompanyComponent {
}

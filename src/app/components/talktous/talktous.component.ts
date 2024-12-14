import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-talktous',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule
  ],
  templateUrl: './talktous.component.html',
  styleUrl: './talktous.component.css'
})
export class TalktousComponent {
}

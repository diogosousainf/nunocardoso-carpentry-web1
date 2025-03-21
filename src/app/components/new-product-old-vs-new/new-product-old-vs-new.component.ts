import { Component } from '@angular/core';
import {TranslatePipe} from "@ngx-translate/core";

@Component({
  selector: 'app-new-product-old-vs-new',
  standalone: true,
    imports: [
        TranslatePipe
    ],
  templateUrl: './new-product-old-vs-new.component.html',
  styleUrl: './new-product-old-vs-new.component.css'
})
export class NewProductOldVsNewComponent {

}

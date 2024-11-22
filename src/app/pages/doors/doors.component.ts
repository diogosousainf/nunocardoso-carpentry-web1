import { Component, OnInit } from '@angular/core';
import {NgClass, NgForOf} from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-doors',
  standalone: true,
  imports: [
    NgForOf,
    NgClass
  ],
  templateUrl: './doors.component.html',
  styleUrls: ['./doors.component.css']
})
export class DoorsComponent implements OnInit {
  images: string[] = [
    'p1.webp', 'p2.webp', 'p3.webp', 'p10.webp', 'p11.webp', 'p12.webp', 'p14.webp', 'p15.webp', 'p16.webp', 'p19.webp',
    'p21.webp', 'p22.webp', 'p25.webp', 'p26.webp', 'p27.webp', 'p28.webp', 'p29.webp', 'p30.webp', 'p31.webp', 'p32.webp',
    'porta-menu.JPEG', 'pr1.jpg', 'pr2.jpg', 'pr3.jpg'
  ];

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    // Código para inicialização se necessário
  }

  getSanitizedUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
}

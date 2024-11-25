import { Component, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-company-quote',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './company-quote.component.html',
  styleUrls: ['./company-quote.component.css']
})
export class CompanyQuoteComponent implements OnInit {
  recentWorks = [
    {
      title: 'Trabalho 1',
      coverImage: '/assets/images/Cozinhas/c8.png',
      gallery: [
        '/assets/images/Cozinhas/c9.png',
        '/assets/images/Cozinhas/c12.png'
      ]
    },
    {
      title: 'Trabalho 2',
      coverImage: '/assets/images/Cozinhas/c10.png',
      gallery: [
        '/assets/images/Cozinhas/c12.png',
        '/assets/images/Cozinhas/c13.png'
      ]
    },
    {
      title: 'Trabalho 3',
      coverImage: '/assets/images/Cozinhas/c13.png',
      gallery: [
        '/assets/images/Cozinhas/c16.png',
        '/assets/images/Cozinhas/c17.png'
      ]
    }
    // Adicione mais trabalhos recentes conforme necessário
  ];

  constructor() {}

  ngOnInit(): void {
    // Código para inicialização se necessário
  }
}

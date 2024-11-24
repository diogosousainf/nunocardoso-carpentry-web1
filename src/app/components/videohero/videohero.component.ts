import {AfterViewInit, Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import Plyr from 'plyr';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-videohero',
  standalone: true,
  imports: [],
  templateUrl: './videohero.component.html',
  styleUrl: './videohero.component.css'
})
export class VideoheroComponent  implements AfterViewInit {

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      import('plyr').then(Plyr => {
        const videoElement = document.querySelector('#my-video') as HTMLVideoElement;

        if (videoElement) {
          new Plyr.default(videoElement, {
            controls: [], // Remover todos os controles, deixando o vídeo limpo
            autoplay: true,
            muted: true,
            loop: {
              active: true,
            }
          });
        }
      }).catch(error => console.error('Erro ao carregar o Plyr:', error));
    }
  }
}

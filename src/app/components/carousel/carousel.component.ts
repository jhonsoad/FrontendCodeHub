
import { Component, ViewChild, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NgbCarousel, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-carousel',
  imports: [
    RouterOutlet,
    NgbCarouselModule,
  ],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  private router = inject(Router);


  @ViewChild('carousel', { static: true }) carousel?: NgbCarousel;

  courses = [
    { path: 'Acessibilidade Web', image: 'assets/images/acessibilidade-web.jpeg' },
    { path: 'Js ArmazenandoDados no Navegador', image: 'assets/images/armazenando-dados-navegador.webp' },
    { path: 'Js Crie Paginas Dinamicas', image: 'assets/images/crie-paginas-dinamicas.webp' },
    { path: 'Js Manipulando O DOM', image: 'assets/images/manipulando-dom.webp' },
    { path: 'Js Programando na Linguagem Web', image: 'assets/images/programando-linguagem-web.jpg' },
    { path: 'Logica', image: 'assets/images/logica.jpg' }
  ];

  showCarousel = true;

  navigateToCourse(path: string) {
    this.showCarousel = false;
    this.router.navigate([path]);
  }

  backToCarousel() {
    this.showCarousel = true;
  }
}

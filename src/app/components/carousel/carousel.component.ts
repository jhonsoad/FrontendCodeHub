import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NgbCarousel, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { AcessibilidadeWebComponent } from '../cursos/acessibilidade-web/acessibilidade-web.component';
import { JsArmazenandoDadosNoNavegadorComponent } from '../cursos/js-armazenando-dados-no-navegador/js-armazenando-dados-no-navegador.component';
import { JsCriePaginasDinamicasComponent } from '../cursos/js-crie-paginas-dinamicas/js-crie-paginas-dinamicas.component';
import { JsManipulandoODOMComponent } from '../cursos/js-manipulando-o-dom/js-manipulando-o-dom.component';
import { JsProgramandoLinguagemWebComponent } from '../cursos/js-programando-linguagem-web/js-programando-linguagem-web.component';
import { LogicaComponent } from '../cursos/logica/logica.component';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    NgbCarouselModule,
    AcessibilidadeWebComponent,
    JsArmazenandoDadosNoNavegadorComponent,
    JsCriePaginasDinamicasComponent,
    JsManipulandoODOMComponent,
    JsProgramandoLinguagemWebComponent,
    LogicaComponent,
  ],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  
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

  constructor(private router: Router) {}

  navigateToCourse(path: string) {
    this.showCarousel = false;
    this.router.navigate([path]);
  }

  backToCarousel() {
    this.showCarousel = true;
  }
}

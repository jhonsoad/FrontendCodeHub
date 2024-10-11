import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { NgClass } from '@angular/common';
import { UtilsService } from '../../../services/utils.service';
import { FooterA11yComponent } from "./footer-a11y/footer-a11y.component";
import { HeaderA11yComponent } from "./header-a11y/header-a11y.component";
import { ContactA11yComponent } from "./contact-a11y/contact-a11y.component";
import { HighlightA11yComponent } from "./highlight-a11y/highlight-a11y.component";
import { DifferentialA11yComponent } from "./differential-a11y/differential-a11y.component";
import { AboutA11yComponent } from "./about-a11y/about-a11y.component";
import { PlansA11yComponent } from "./plans-a11y/plans-a11y.component";
import { BlogA11yComponent } from "./blog-a11y/blog-a11y.component";
import { HighlightsA11yComponent } from "./highlights-a11y/highlights-a11y.component";
import { InstitutionalA11yComponent } from "./institutional-a11y/institutional-a11y.component";

@Component({
  selector: 'app-acessibilidade-web',
  standalone: true,
  imports: [NgClass, FooterA11yComponent, HeaderA11yComponent, ContactA11yComponent, HighlightA11yComponent, DifferentialA11yComponent, AboutA11yComponent, PlansA11yComponent, BlogA11yComponent, HighlightsA11yComponent, InstitutionalA11yComponent],
  templateUrl: './acessibilidade-web.component.html',
  styleUrl: './acessibilidade-web.component.scss'
})
export class AcessibilidadeWebComponent implements OnInit {

  contatoApeperia: string = 'contato@apeperia.com';

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private utilsService: UtilsService,
    ) {  
  }

  ngOnInit(): void {
    this.titleService.setTitle('Acessibilidade Web');
    this.adicionaMetaTag();
    this.adicionaLinksTags();
  }

  adicionaMetaTag(): void {
    this.metaService.addTag({ name: 'viewport', content: 'width=device-width' });
  }

  adicionaLinksTags(): void {
    this.utilsService.adicionaLinkTag('stylesheet', 'https://fonts.googleapis.com/css?family=Montserrat:300,400,700|Open+Sans:300,400,700');
  }

}

//-------------- JAVASCRIPT ORIGINAL -----------------------------------------------------------------
// CAROUSEL.JS
// var btns = document.querySelectorAll('.listaDeArtigos-slider-item');

// Percorre todos os botoes controladores
// btns.forEach(function(btn) {
//   btn.addEventListener('click', function() {
    

    // Remove classe 'ativo' dos outros botoes
//     btns.forEach(function(btnRemoveClass) {
//       btnRemoveClass.classList.remove('listaDeArtigos-slider-item--ativo')
//     })

//     this.classList.add('listaDeArtigos-slider-item--ativo')
//   })
// })

// DIALOG.JS
// Variáveis
// var btnAbreDialog = document.querySelector('#abreDialog');
// var dialog = document.querySelector('.dialogNewsletter');
// var dialogBody = document.querySelector('.dialogNewsletter-body');
// var dialogOverlay = document.querySelector('.dialogNewsletter-overlay');

// Quando abrir a dialog...
// btnAbreDialog.addEventListener('click', function() {
//   dialog.classList.add('dialogNewsletter--aberto');
// });

// function fechandoDialog() {
//   document.activeElement.blur();
//   dialog.classList.remove('dialogNewsletter--aberto');     
// }

// Listeners
// document.querySelector('.dialogNewsletter-fechar').addEventListener('click', fechandoDialog);

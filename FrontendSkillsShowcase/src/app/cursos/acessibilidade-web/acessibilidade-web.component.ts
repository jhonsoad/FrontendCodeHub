import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-acessibilidade-web',
  standalone: true,
  imports: [NgClass],
  templateUrl: './acessibilidade-web.component.html',
  styleUrl: './acessibilidade-web.component.scss'
})
export class AcessibilidadeWebComponent implements OnInit {

  contatoApeperia: string = 'contato@apeperia.com';
  isMyComponent: boolean = true;
  botaoAtivo: number = 0;
  modal: boolean = false;
  classeAtiva: Record<string, boolean> = {};
  contatoSucesso: boolean = false;
  contatoErro: boolean = false;
  contatoValidouFoi: boolean = false;
  contatoValidouErro: boolean = false;

  constructor(private titleService: Title) {  
  }

  ngOnInit(): void {
    this.titleService.setTitle('Acessibilidade Web');
  }

  carosselJs(noticia: number): void {
    this.botaoAtivo = noticia;
  }

  abriModal(): void {
    this.modal = true;
  }

  fechaModal(): void {
    this.modal = false;
  }

  selecionaClasse(): void {
    this.classeAtiva = {
      contatoCampoSucesso: this.contatoSucesso,
      contatoCampoErro: this.contatoErro,
      contatoCampoValidouFoi: this.contatoValidouFoi,
      contatoCampoValidouErro: this.contatoValidouErro,
    }
  };

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

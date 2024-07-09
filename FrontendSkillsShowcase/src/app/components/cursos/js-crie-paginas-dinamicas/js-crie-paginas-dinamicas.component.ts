import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { UtilsService } from '../../../services/utils.service';
@Component({
  selector: 'app-js-crie-paginas-dinamicas',
  standalone: true,
  imports: [],
  templateUrl: './js-crie-paginas-dinamicas.component.html',
  styleUrl: './js-crie-paginas-dinamicas.component.scss'
})
export class JsCriePaginasDinamicasComponent implements OnInit {

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private utilsService: UtilsService
    ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Alura MIDI');
    this.adicionaMetaTag();
    this.adicionaLinksTags();
  }

  adicionaMetaTag(): void {
    this.metaService.addTag({ charset: 'UTF-8' })
    this.metaService.addTag({ httpEequiv: 'X-UA-Compatible', content: 'IE=edge' });
    this.metaService.addTag({ name: 'viewport', content: 'width=device-width, initial-scale=1.0' });
  }

  adicionaLinksTags(): void {
    this.utilsService.adicionaLinkTag('preconnect', 'https://fonts.googleapis.com');
    this.utilsService.adicionaLinkTag('preconnect', 'https://fonts.gstatic.com"', 'crossorigin');
    this.utilsService.adicionaLinkTag('stylesheet', 'https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600&display=swap');
    this.utilsService.adicionaLinkTag('icon', '../../../assets/js-crie-paginas-dinamicas/bateria.png', 'image/png');
  }

}


//-------------- JAVASCRIPT ORIGINAL -----------------------------------------------------------------
// function tocaSom(seletorAudio) {
//   const elemento = document.querySelector(seletorAudio);

//   if(elemento && elemento.localName === 'audio') {
//       elemento.play();
//   }
//   else {
//       console.log('Elemento não encontrado ou seletor inválido');
//   };
// };

// const listaDeTeclas = document.querySelectorAll('.tecla');

// for (contador = 0; contador < listaDeTeclas.length; contador ++) {

//   const tecla = listaDeTeclas[contador];
//   const instrumento = tecla.classList[1];
  
//   //template string
//   const idAudio = `#som_${instrumento}`;
//   //console.log(idAudio);

//   tecla.onclick = function() {
//       tocaSom(idAudio);
//   };

//   tecla.onkeydown = function(e){

//       if(e.code === 'Enter' || e.code === 'Space') {
//           tecla.classList.add('ativa');
//       }
//   }
//   tecla.onkeyup = function () {
//       tecla.classList.remove('ativa')
//   }
// };

import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { UtilsService } from '../../../services/utils.service';
import {FormsModule} from '@angular/forms';
import { NgFor } from '@angular/common';
import { Item } from './item';

@Component({
  selector: 'app-js-armazenando-dados-no-navegador',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './js-armazenando-dados-no-navegador.component.html',
  styleUrl: './js-armazenando-dados-no-navegador.component.scss'
})
export class JsArmazenandoDadosNoNavegadorComponent implements OnInit{

  formData: any = {
    nome: '',
    quantidade: '',
  };
  itens: Item[] = [];
  isMyComponent: boolean = true;

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private utilsService: UtilsService
    ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Mochila de viagem');
    this.adicionaMetaTag();
    this.adicionaLinksTags();
    this.listaItens();
  }

  adicionaMetaTag(): void {
    this.metaService.addTag({ httpEquiv: 'X-UA-Compatible', content: 'IE=edge' });
    this.metaService.addTag({ name: 'viewport', content: 'width=device-width, initial-scale=1.0' });
  }

  adicionaLinksTags(): void {
    this.utilsService.adicionaLinkTag('preconnect', 'https://fonts.googleapis.com');
    this.utilsService.adicionaLinkTag('preconnect', 'https://fonts.gstatic.com', 'crossorigin');
    this.utilsService.adicionaLinkTag('stylesheet', 'https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  }


  listaItens() {
    const itensString = localStorage.getItem('itens');
    this.itens = itensString ? JSON.parse(itensString) : []; //Verifica se a string recuperada existe e, se existir, a converte de volta para um array de itens. Se não existir, define this.itens como um array vazio.
  }

  enviaForm(evento: Event): void {
    evento.preventDefault();
    const existe = this.itens.find(item => item.nome === this.formData.nome);//Procura na lista de itens (this.itens) um item que tenha o mesmo nome que o valor inserido no formulário (this.formData.nome). O método find retorna o primeiro item que satisfaz a condição de busca.
    const newItem: Item = { //Cria um novo item
      id: existe ? existe.id //Se existe for verdadeiro, o novo item receberá o mesmo ID do item existente (existe.id).Se não houver(existe será undefined)
      : //Será atribuído um novo ID ao novo item.
      this.itens.length > 0 ? this.itens[this.itens.length - 1].id + 1 //Se a lista itens não estiver vazia, o novo ID será o último ID na lista mais um (this.itens[this.itens.length - 1].id + 1).
      : 0,// Caso contrário, se a lista estiver vazia, o ID será 0.
      nome: this.formData.nome,
      quantidade: this.formData.quantidade
    };

    if (existe) {//se o find() encontrou e retornou um item ele é atualizado
      const index = this.itens.findIndex(item => item.id === existe.id);//findIndex() é utilizado para localizar o índice do item que possui o mesmo id que o item encontrado na busca feita pelo find()
      this.itens[index] = newItem;//Se o item foi encontrado na posição correspondente do array this.itens é substituído pelo newItem.
    } else {
      this.itens.push(newItem);//Se não o novo item é adicionado ao array
    }

    localStorage.setItem('itens', JSON.stringify(this.itens));
    this.formData = { nome: '', quantidade: '' };
  }

  deleteItem(id: number): void {
    this.itens = this.itens.filter(item => item.id !== id);
    localStorage.setItem('itens', JSON.stringify(this.itens));
  }
}


//-------------- JAVASCRIPT ORIGINAL -----------------------------------------------------------------
// const form = document.getElementById('novoItem');
// const lista = document.getElementById('lista')
// const itens = JSON.parse(localStorage.getItem('itens')) || []

// itens.forEach(elemento => {
//     criaElemento(elemento)
// })

// form.addEventListener('submit', (evento) => {
//     evento.preventDefault();

//     const nome = evento.target.elements['nome'];
//     const quantidade = evento.target.elements['quantidade'];

//     const existe = itens.find( elemento => elemento.nome === nome.value ); 

//     const itemAtual = {
//         nome: nome.value,
//         quantidade: quantidade.value,
//     }

//     if (existe) {
//         itemAtual.id = existe.id;

//         atualizaElemento(itemAtual);

//         itens[itens.findIndex(elemento => elemento.id === existe.id)] = itemAtual;
//     }else {
//         itemAtual.id = itens[itens.length -1] ? (itens[itens.length-1]).id +1 : 0;

//         criaElemento(itemAtual);
    
//         itens.push(itemAtual);
//     }

//     localStorage.setItem('itens', JSON.stringify(itens));

//     nome.value = '';
//     quantidade.value = '';
// })

// function criaElemento(item) {

//     const novoItem = document.createElement('li');
//     novoItem.classList.add('item');
    
//     const numeroItem = document.createElement('strong');
//     numeroItem.innerHTML = item.quantidade;
//     numeroItem.dataset.id = item.id;
//     novoItem.appendChild(numeroItem);

//     novoItem.innerHTML += item.nome;

//     novoItem.appendChild(botaoDeleta(item.id));

//     lista.appendChild(novoItem);
// }

// function atualizaElemento(item) {
//     document.querySelector("[data-id='" + item.id + "']").innerHTML = item.quantidade
// }

// function botaoDeleta(id) {
//     const elementoBotao = document.createElement("button")
//     elementoBotao.innerText = "X"

//     elementoBotao.addEventListener('click', function() {
//         deletaElemento(this.parentNode, id)
//     })

//     return elementoBotao;
// }

// function deletaElemento(tag, id) {
//     tag.remove();

//     itens.splice(itens.findIndex(elemento => elemento.id === id), 1);

//     localStorage.setItem('itens', JSON.stringify(itens));
// }

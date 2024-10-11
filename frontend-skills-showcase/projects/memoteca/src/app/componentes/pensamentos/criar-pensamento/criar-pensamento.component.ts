import { Component, OnInit } from '@angular/core';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { minusculoValidator } from './minusculoValidators';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  formulario!: FormGroup; // declara propriedade do tipo formGroup e garante ao typescript que essa variavel não sera nula ou indefinida

  constructor(
    private service: PensamentoService,
    private router: Router,
    private formBuilder: FormBuilder // service responsável pela construção do formulário
    ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({ // atribui ao parametro o conteudo a ser enviado do formulario
      conteudo: ['', Validators.compose([ // Validators.compose é para adicionar mais de um validator
        Validators.required, // Validators é uma classe do angular para validar o formulario ex: tamanho min ou max ou required passados como array
        Validators.pattern(/(.|\s)*\S(.|\s)*/) // o valor do pattern é uma expressão regular para não permitir que seja colocado espaços vazios
      ])], 
      autoria: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        // minusculoValidator
      ])],
      modelo: ['modelo1'],
      favorito: [false]
    })
  }

  criarPensamento() {
    console.log(this.formulario.get('autoria')?.errors);
    if (this.formulario.valid) { // .valid verifica se o formulario é valido
      this.service.criar(this.formulario.value).subscribe(() => {
        this.router.navigate(['/listarPensamento']);
      });
    }
  }

  cancelar() {
    this.router.navigate(['/listarPensamento']);
  }

  habilitarBotao(): string {
    if (this.formulario.valid) {
      return 'botao';
    } else {
      return 'botao__desabilitado';
    }
  }

}

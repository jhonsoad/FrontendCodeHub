import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-a11y',
  standalone: true,
  imports: [NgClass],
  templateUrl: './contact-a11y.component.html',
  styleUrl: './contact-a11y.component.scss'
})
export class ContactA11yComponent {

  classeAtiva: Record<string, boolean> = {};
  contatoSucesso: boolean = false;
  contatoErro: boolean = false;
  contatoValidouFoi: boolean = false;
  contatoValidouErro: boolean = false;

  
  selecionaClasse(): void {
    this.classeAtiva = {
      contatoCampoSucesso: this.contatoSucesso,
      contatoCampoErro: this.contatoErro,
      contatoCampoValidouFoi: this.contatoValidouFoi,
      contatoCampoValidouErro: this.contatoValidouErro,
    }
  };

}

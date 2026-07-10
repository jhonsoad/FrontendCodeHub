import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-blog-a11y',
    imports: [NgClass],
    templateUrl: './blog-a11y.component.html',
    styleUrl: './blog-a11y.component.scss'
})
export class BlogA11yComponent {

  botaoAtivo = 0;


  carosselJs(noticia: number): void {
    this.botaoAtivo = noticia;
  }

}

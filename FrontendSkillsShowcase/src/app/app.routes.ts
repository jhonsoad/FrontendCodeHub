import { Routes } from '@angular/router';
import { AcessibilidadeWebComponent } from './cursos/acessibilidade-web/acessibilidade-web.component';
import { JsArmazenandoDadosNoNavegadorComponent } from './cursos/js-armazenando-dados-no-navegador/js-armazenando-dados-no-navegador.component';
import { JsCriePaginasDinamicasComponent } from './cursos/js-crie-paginas-dinamicas/js-crie-paginas-dinamicas.component';
import { JsManipulandoODOMComponent } from './cursos/js-manipulando-o-dom/js-manipulando-o-dom.component';
import { JsProgramandoLinguagemWebComponent } from './cursos/js-programando-linguagem-web/js-programando-linguagem-web.component';
import { LogicaComponent } from './cursos/logica/logica.component';

export const routes: Routes = [
    { path: 'AcessibilidadeWeb', component: AcessibilidadeWebComponent },
    { path: 'JsArmazenandoDadosNoNavegador', component: JsArmazenandoDadosNoNavegadorComponent },
    { path: 'JsCriePaginasDinamicasComponent', component: JsCriePaginasDinamicasComponent },
    { path: 'JsManipulandoODOMComponent', component: JsManipulandoODOMComponent },
    { path: 'JsProgramandoLinguagemWebComponent', component: JsProgramandoLinguagemWebComponent },
    { path: 'LogicaComponent', component: LogicaComponent }
];

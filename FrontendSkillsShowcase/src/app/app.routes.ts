import { Routes } from '@angular/router';
import { AcessibilidadeWebComponent } from './components/cursos/acessibilidade-web/acessibilidade-web.component';
import { JsArmazenandoDadosNoNavegadorComponent } from './components/cursos/js-armazenando-dados-no-navegador/js-armazenando-dados-no-navegador.component';
import { JsCriePaginasDinamicasComponent } from './components/cursos/js-crie-paginas-dinamicas/js-crie-paginas-dinamicas.component';
import { JsManipulandoODOMComponent } from './components/cursos/js-manipulando-o-dom/js-manipulando-o-dom.component';
import { JsProgramandoLinguagemWebComponent } from './components/cursos/js-programando-linguagem-web/js-programando-linguagem-web.component';
import { LogicaComponent } from './components/cursos/logica/logica.component';
import { IntegrationComponent } from './integration/integration.component';

export const routes: Routes = [
    { path: '', component: IntegrationComponent},
    { path: 'AcessibilidadeWeb', component: AcessibilidadeWebComponent },
    { path: 'JsArmazenandoDadosNoNavegador', component: JsArmazenandoDadosNoNavegadorComponent },
    { path: 'JsCriePaginasDinamicas', component: JsCriePaginasDinamicasComponent },
    { path: 'JsManipulandoODOM', component: JsManipulandoODOMComponent },
    { path: 'JsProgramandoLinguagemWeb', component: JsProgramandoLinguagemWebComponent },
    { path: 'Logica', component: LogicaComponent }
];

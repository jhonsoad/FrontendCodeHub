import { Routes } from '@angular/router';
import { AcessibilidadeWebComponent } from './components/cursos/acessibilidade-web/acessibilidade-web.component';
import { JsArmazenandoDadosNoNavegadorComponent } from './components/cursos/js-armazenando-dados-no-navegador/js-armazenando-dados-no-navegador.component';
import { JsCriePaginasDinamicasComponent } from './components/cursos/js-crie-paginas-dinamicas/js-crie-paginas-dinamicas.component';
import { JsManipulandoODOMComponent } from './components/cursos/js-manipulando-o-dom/js-manipulando-o-dom.component';
import { JsProgramandoLinguagemWebComponent } from './components/cursos/js-programando-linguagem-web/js-programando-linguagem-web.component';
import { LogicaComponent } from './components/cursos/logica/logica.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'projects', component: ProjectsComponent},
    { path: 'about', component: AboutComponent},
    { path: 'acessibilidadeWeb', component: AcessibilidadeWebComponent },
    { path: 'jsArmazenandoDadosNoNavegador', component: JsArmazenandoDadosNoNavegadorComponent },
    { path: 'jsCriePaginasDinamicas', component: JsCriePaginasDinamicasComponent },
    { path: 'jsManipulandoODOM', component: JsManipulandoODOMComponent },
    { path: 'jsProgramandoLinguagemWeb', component: JsProgramandoLinguagemWebComponent },
    { path: 'logica', component: LogicaComponent }
];

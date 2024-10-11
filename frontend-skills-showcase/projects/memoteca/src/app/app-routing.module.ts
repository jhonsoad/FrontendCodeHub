import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HtmCssComponent } from './HTM-CSS/htm-css/htm-css.component';
import { AboutComponent } from './HTM-CSS/about/about.component';
import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';
import { ListarPensamentoComponent } from './componentes/pensamentos/listar-pensamento/listar-pensamento.component';
import { ExcluirPensamentoComponent } from './componentes/pensamentos/excluir-pensamento/excluir-pensamento.component';
import { EditarPensamentoComponent } from './componentes/pensamentos/editar-pensamento/editar-pensamento.component';

const routes: Routes = [
  { path: '', redirectTo: 'listarPensamento', pathMatch: 'full' },
  { path: 'htmlCss', component: HtmCssComponent },
  { path: 'htmlCssSobre', component: AboutComponent },
  { path: 'listarPensamento', component: ListarPensamentoComponent},
  { path: 'criarPensamento', component: CriarPensamentoComponent},
  { path: 'pensamentos/excluirPensamento/:id', component: ExcluirPensamentoComponent},
  { path: 'pensamentos/editarPensamento/:id', component: EditarPensamentoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

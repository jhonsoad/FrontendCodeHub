import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento/pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos: Pensamento[] = [];
  paginaAtual: number = 1;
  haMaisPensamentos: boolean = true;
  filtro: string = '';
  favoritos: boolean = false;
  listaFavoritos: Pensamento[] = [];
  titulo: string = 'Meu Mural';

  constructor(
    private service: PensamentoService,
    private router: Router) { }

  ngOnInit(): void {
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos).subscribe((listaPensamentos) => { // usamos o subscribe para receber o retorno do listar() guardamos a resposta na propriedade listaPensamentos e colocamos em uma variavel global
      this.listaPensamentos = listaPensamentos;
    })
  }

  carregarMaisPensamentos() {
    this.service.listar(++this.paginaAtual, this.filtro, this.favoritos) // incrementa +1 na paginaAtual antes de fazer a chamada
      .subscribe((listaPensamentos) => {
        this.listaPensamentos.push(...listaPensamentos); // acresenta os dados da nova pagina ao array que tem os dados da pagina anterior
        if(!listaPensamentos.length) { // listaPensamentos.length retorna o numero de elementos na lista, então o !listaPensamentos verifica que a lsta esta vazia
          this.haMaisPensamentos = false;
        }
      })
  } 

  pesquisarPensamentos() {
    this.haMaisPensamentos = true;
    this.paginaAtual = 1;
    this.listaPensamentos = [];
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos)
      .subscribe((listaPensamentos) => {
        this.listaPensamentos = listaPensamentos;
      });
  }

  recarregarComponente() {
    //location.reload(); // recarrega a pagina
    this.favoritos = false;
    this.paginaAtual = 1;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false; // desabilita o recarregamento do componente quando a url for alterada
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([this.router.url]) // representa url atual
  }

  recarregarComponenteParaAngularAcimaDaVersao14() {
    // this.router.onSameUrlNavigation = 'reload';
    // this.router.routeReuseStrategy.shouldReuseRoute = () => false; // desabilita o recarregamento do componente quando a url for alterada
    //esses metodos do router estao depreciados

    // @NgModule({
    //   imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
    //   exports: [RouterModule]
    //  })
    // export class AppRoutingModule { }
    // precisa mudar os imports no app routing

    //import {ActivatedRouteSnapshot, BaseRouteReuseStrategy} from '@angular/router';
    //export class CustomReuseStrategy extends BaseRouteReuseStrategy {
    //  public override shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    //    return future.data['reuseComponent'];
    //   }
    //}
    // criar essa classe

  //providers: [
  //  {provide: RouteReuseStrategy, useClass: CustomReuseStrategy}
  //],
  //adicionar esse provider apos o exports no routing module
  
  // {
  //   path: 'listarPensamento',
  //   component: ListarPensamentoComponent,
  //   data: {
  //     reuseComponent: true
  //   }
  // },
  //na const routes no routingmodule adicione a propriedade data
  
  // import { RouteReuseStrategy } from '@angular/router';
  // import { CustomReuseStrategy } from './custom-reuse-strategy'
  // importe as classes e utilize
  }

  listarFavoritos() {
    this.titulo = 'Meus Favoritos'
    this.favoritos = true;
    this.haMaisPensamentos = true;
    this.paginaAtual = 1;
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos)
      .subscribe(listaPensamentosFavoritos => {
        this.listaPensamentos = listaPensamentosFavoritos;
        this.listaFavoritos = listaPensamentosFavoritos;
      });
  }

}

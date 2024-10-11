import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Pensamento } from './pensamento/pensamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  private readonly API = 'http://localhost:3000/pensamentos';
  constructor(private http: HttpClient) { } //O servico httpClient é usado para fazer requisições e consumir apis 

  listar(pagina: number, filtro: string, favoritos: boolean): Observable<Pensamento[]> {
    const intensPorPagina = 6; //GET /post?_page=7&_limit=20 formato para criar paginacao

    let params = new HttpParams() //HttpParams é uma forma melhor de passarmos parametros na requisição ao inves de ficarmos concatenando
      .set("_page", pagina) // metodo set serve para substituir um valor, passamos o nome do parametro e valor
      .set("_limit", intensPorPagina);

    if(filtro.trim().length > 2) { //.trim remove os esoaços vazios dessa string
      params = params.set("q", filtro) // o q é do full-text search usado para fazer pesquisa por string
    } // O if verifica que se o essa string menos os espcos vazios for maior que 2

    if(favoritos) {
      params = params.set("favorito", true)
    }
    //return this.http.get<Pensamento[]>(`${this.API}?page=${pagina}&_limit=${intensPorPagina}`);
    // o metodo http do httpClient é usado para fazer as requisições passando metodo que usaremos nesse aso o get, podemos tipar o retorno passando o diamnante "<>" e entre parenteses a url da api
    
    return this.http.get<Pensamento[]>(this.API, { params })
  } //esse metodo nos retornara um observable do tipo Pensamento[] e para eu conseguir receber esses dados eu preciso usar um subscribe para receber as informações de api que agora esta sendo observada isso no local que eu chamar esse metodo

  criar(pensamento: Pensamento): Observable<Pensamento> {
    return this.http.post<Pensamento>(this.API, pensamento);
  }

  editar(pensamento: Pensamento): Observable<Pensamento> {
    const url = `${this.API}/${pensamento.id}`
    return this.http.put<Pensamento>(url, pensamento)
  }

  mudarFavorito(pensamento: Pensamento): Observable<Pensamento> {
    pensamento.favorito = !pensamento.favorito
    return this.editar(pensamento)
  }

  excluir(id: number): Observable<Pensamento> {
    const url = `${this.API}/${id}`
    return this.http.delete<Pensamento>(url)
  }

  buscarPorId(id: number): Observable<Pensamento> {
    const url = `${this.API}/${id}`
    return this.http.get<Pensamento>(url)
  }
}

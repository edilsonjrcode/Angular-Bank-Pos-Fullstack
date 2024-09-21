import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Cliente } from '../../models/Cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  api = `${environment.api}clientes/`

  constructor(private clientHttp: HttpClient) { }

  inserir(novoCliente: Cliente): Observable<Cliente> {
    return this.clientHttp.post<Cliente>(
      this.api, novoCliente
    )
  }

  listar(): Observable<Cliente[]> {
    return this.clientHttp.get<Cliente[]>(this.api)
  }

  listar_paginado(page: number, pageSize: number): Observable<Cliente[]> {
    return this.clientHttp.get<Cliente[]>(`${this.api}?page=${page}&pageSize=${pageSize}`);
  }

  deletar(id: number): Observable<object>{
    return this.clientHttp.delete(`${this.api}${id}`)
  }

  pesquisarPorId(id: number): Observable<Cliente>{
    return this.clientHttp.get<Cliente>(`${this.api}${id}`)
  }

  atualizar(cliente: Cliente): Observable<Cliente>{
    return this.clientHttp.put<Cliente>(`${this.api}${cliente.id}`, cliente)
  }

}

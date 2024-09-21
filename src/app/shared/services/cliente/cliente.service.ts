import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Cliente } from '../../models/Cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  api = `${environment.api}/clientes/`

  constructor(private clientHttp: HttpClient) { }

  inserir(novoCliente: Cliente): Observable<Cliente>{
    return this.clientHttp.post<Cliente>(
      this.api, novoCliente
    )
  }

  listar(): Observable<Cliente[]>{
    return this.clientHttp.get<Cliente[]>(this.api)
  }

}

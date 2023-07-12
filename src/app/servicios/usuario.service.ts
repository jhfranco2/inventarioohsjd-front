import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs'
import { Content, UsuarioCrear, UsuarioResponse } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  url = 'http://localhost:8080/inventario-api/v1/'

  constructor(private http: HttpClient) { }

  public getUsuarios(pagina: number, size: number, order: string, asc: boolean) {
    let params = new HttpParams()
      .set('pagina', pagina.toString())
      .set('size', size.toString())
      .set('order', order)
      .set('asc', asc.toString());
      return this.http.get<UsuarioResponse>(this.url, { params });
  }

  crearUsuario(usuario: any, archivos: FormData): Observable<any> {
    const url = `${this.url}crear-usuario`;
    const headers = new HttpHeaders().append('Accept', 'application/json');
  
    archivos.append('usuario', JSON.stringify(usuario));
  
    return this.http.post(url, archivos, { headers });
  }
  
  

}

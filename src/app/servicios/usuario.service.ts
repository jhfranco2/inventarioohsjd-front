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

  public crearUsuario(usuario: Content) {
    const formData = new FormData();
    formData.append('', JSON.stringify(usuario));
  
    if (usuario.archivoActaEntrega) {
      formData.append('archivoActaEntrega', usuario.archivoActaEntrega);
    }
    if (usuario.archivoFormatoActivo) {
      formData.append('archivoFormatoActivo', usuario.archivoFormatoActivo);
    }
  
    console.log("soy el formdata")
    formData.forEach((value: Blob | string, key: string) => {
      console.log(`Clave: ${key}, Valor: ${value}`);
    });
    
  
    return this.http.post(`${this.url}crear-usuario`, formData);
  }
  
  

}

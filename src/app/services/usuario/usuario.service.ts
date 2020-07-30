import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Ruta} from '../../config';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url:string;
  constructor(private http: HttpClient) {
    this.url = Ruta.url;
   }
   
   crearUsuario(usuario){
    return this.http.post(`${this.url}/usuario`,usuario);
  }
  loginUsuario(usuario){
    return this.http.post(`${this.url}/usuario/login`,usuario);
  }
}

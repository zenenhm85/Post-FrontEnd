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
   getUsuarios(){
     return this.http.get(this.url);
   }
   crearUsuario(usuario){
    return this.http.post(`${this.url}/usuario`,usuario);
  }
}

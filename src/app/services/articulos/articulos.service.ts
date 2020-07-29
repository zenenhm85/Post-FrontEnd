import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Ruta} from '../../config'

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {
url:string;
  constructor(private http: HttpClient) {
    this.url = Ruta.url;
   }
   getArticulos(){
     return this.http.get(`${this.url}/articulos`);
   }
}

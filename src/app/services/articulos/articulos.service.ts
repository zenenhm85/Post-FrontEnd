import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {
url:string;
  constructor(private http: HttpClient) {
    this.url = 'assets/json/articulos.json';
   }
   getArticulos(){
     return this.http.get(this.url);
   }
}

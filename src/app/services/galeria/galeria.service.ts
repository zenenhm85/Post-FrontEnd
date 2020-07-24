import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GaleriaService {

  url:string;
  constructor(private http:HttpClient) {
    this.url = 'assets/json/galeria.json';
   }

   getImages(){
     return this.http.get(this.url);
   }
}

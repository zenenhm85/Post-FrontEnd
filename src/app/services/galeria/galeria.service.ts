import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Ruta} from '../../config';

@Injectable({
  providedIn: 'root'
})
export class GaleriaService {

  url:string;
  constructor(private http:HttpClient) {
    this.url = Ruta.url
   }

   getImages(){
     return this.http.get(`${this.url}/galeria`);
   }
}

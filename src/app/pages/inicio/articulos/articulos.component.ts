import { Component, OnInit } from '@angular/core';
import {ArticulosService} from '../../../services/articulos/articulos.service';
import {Ruta} from '../../../config';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {
  url:string;
  articulos:any;
  constructor(private articulosService: ArticulosService) { 
    this.url = Ruta.url; 
  }

  ngOnInit(): void {
    this.articulosService.getArticulos().subscribe(res=>{
      this.articulos = res['data']; 
    })
  }

}

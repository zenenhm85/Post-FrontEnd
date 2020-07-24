import { Component, OnInit } from '@angular/core';
import {ArticulosService} from '../../../services/articulos/articulos.service';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {

  articulos:any;
  constructor(private articulosService: ArticulosService) { 
   
  }

  ngOnInit(): void {
    this.articulosService.getArticulos().subscribe(res=>{
      this.articulos = res;
    })
  }

}

import { Component, OnInit } from '@angular/core';
import {ArticulosService} from '../../../services/articulos/articulos.service';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {

  constructor(private articulosService: ArticulosService) { 
    articulosService.getArticulos().subscribe(res=>{
      console.log("articulos",res);
    })
  }

  ngOnInit(): void {
  }

}

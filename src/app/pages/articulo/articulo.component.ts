import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticulosService } from '../../services/articulos/articulos.service';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { NgForm } from '@angular/forms';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css'],
})
export class ArticuloComponent implements OnInit {
  contenidoArticulo: any;
  currentAticulo: any;
  articulos: any;
  usuarioService:UsuarioService;
  usuarios:any;
  usuario: string;
  password: string;
  login: boolean = false;
  validarLogin:boolean = true;

  constructor(
    activateRoute: ActivatedRoute,
    articuloService: ArticulosService,
    usuarioService:UsuarioService
  ) {
    this.usuarioService = usuarioService;
    articuloService.getArticulos().subscribe((res) => {
      this.articulos = res;
      this.currentAticulo = this.articulos.find((item) => {
        return item.url == activateRoute.snapshot.params['id'];
      });
      this.contenidoArticulo = this.currentAticulo.contenido;
    });
  }

  ngOnInit(): void {}

  onSubmit(){
    let currentUser:boolean = true;
    this.usuarioService.getUsuarios().subscribe(res=>{
      this.usuarios = res;

      currentUser = this.usuarios.find(item=>{
        if(item.usuario == this.usuario && item.password == this.password){
          return true;
        }else{
          return false;
        }
      });
      if(currentUser){
        this.login = true;
        
      }
      else{
        this.validarLogin = false;
      }      
    })        
  }
}

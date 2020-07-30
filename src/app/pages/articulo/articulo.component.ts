import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticulosService } from '../../services/articulos/articulos.service';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { Ruta } from '../../config';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css'],
})
export class ArticuloComponent implements OnInit {
  noLogin: boolean = false;
  mensaje:string = '';
  url: string;
  contenidoArticulo: any;
  currentAticulo: any;
  articulos: any;
  usuarioService: UsuarioService;
  usuarios: any;
  usuario: any;
  login: boolean = false;
  validarLogin: boolean = true;

  constructor(
    activateRoute: ActivatedRoute,
    articuloService: ArticulosService,
    usuarioService: UsuarioService
  ) {
    this.usuario = {
      usuario: null,
      password: null,
    };
    this.url = Ruta.url;
    this.usuarioService = usuarioService;
    articuloService.getArticulos().subscribe((res) => {
      this.articulos = res['data'];
      this.currentAticulo = this.articulos.find((item) => {
        return item.url == activateRoute.snapshot.params['id'];
      });
      this.contenidoArticulo = this.currentAticulo.contenido;
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    
    this.usuarioService.loginUsuario(this.usuario).subscribe((res) => {
      if (res['status'] == 200) {
        this.login = true;
      }
      else{
        this.noLogin = true;
        this.mensaje = res['mensaje'];
        setTimeout(()=>{
          this.noLogin = false;          
        },3000);
      }
    });
  }
}

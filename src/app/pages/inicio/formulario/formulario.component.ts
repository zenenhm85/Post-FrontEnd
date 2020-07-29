import { Component, OnInit } from '@angular/core';
import {UsuarioService} from '../../../services/usuario/usuario.service';


declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  usuario:any;
  usuarioCreado:boolean = false;
  usuarionoCreado = false;
  mensaje:string = '';

  constructor(private usuarioService:UsuarioService) {
    this.usuario = {
      usuario:null,
      password:null,
      email:null
    }
  }

  ngOnInit(): void {
    /*=============================================
VALIDAR FORMULARIO
=============================================*/

    (function () {
      'use strict';
      window.addEventListener(
        'load',
        function () {
          // Get the forms we want to add validation styles to
          var forms = document.getElementsByClassName('needs-validation');
          // Loop over them and prevent submission
          var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener(
              'submit',
              function (event) {
                if (form.checkValidity() === false) {
                  event.preventDefault();
                  event.stopPropagation();
                }
                form.classList.add('was-validated');
              },
              false
            );
          });
        },
        false
      );
    })();

    /*=============================================
ICHECK
=============================================*/

    $('.icheck').iCheck({
      checkboxClass: 'icheckbox_flat-blue',
      radioClass: 'iradio_flat-blue',
    });
  }

  guardarUsuario(){
    this.usuarioService.crearUsuario(this.usuario).subscribe(res=>{
      this.mensaje = res['mensaje'];      
      if(res['status']==200){
        this.usuarioCreado = true;
      }
      else{
        this.usuarionoCreado = true;        
      }
      setTimeout(()=>{
        this.usuarioCreado = false;
        this.usuarionoCreado = false;
      },5000)
    });
  }
}

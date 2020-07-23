import { Component, OnInit } from '@angular/core';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'frontend';

  ngOnInit() {
   

        
    /*=============================================
NAVEGACIÓN SCROLL
=============================================*/

    $('.nav-link').click(function (e) {
      e.preventDefault();

      var target = $(this).attr('href');

      $('html, body').animate(
        {
          scrollTop: $(target).offset().top,
        },
        1000,
        'easeOutBack'
      );
    });

    /*=============================================
SCROLL UP
=============================================*/

    $.scrollUp({
      scrollText: '',
      scrollSpeed: 2000,
      easingType: 'easeOutQuint',
    });
    $('#scrollUp').css({
      bottom: '20px',
      right: '20px',
      width: '50px',
      height: '50px',
      background: 'url(../assets/img/flecha.jpg)'
    });
    
   

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
}

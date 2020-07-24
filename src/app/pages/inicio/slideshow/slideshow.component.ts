import { Component, OnInit } from '@angular/core';
import {SlideshowService} from '../../../services/slideshow/slideshow.service'

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css'],
})
export class SlideshowComponent implements OnInit {
  constructor(private slideshowService: SlideshowService) {
    slideshowService.getSlideshow().subscribe(res=>{
      console.log("Slide",res);
    })
  }

  ngOnInit(): void {
    
    $('.slideshow').jdSlider({
      wrap: '.slide-inner', //Especificar el slide que vamos a usar
      isAuto: true, //Inicia la animación automáticamente
      isLoop: true, //Al finalizar vuelve a comenzar
      interval: 7000, //Tiempo por cada slide
      isCursor: true, //Pausar animación con el mouse
    });
  }
}

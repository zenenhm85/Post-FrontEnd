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
  slides:any
  renderSlides:boolean = true;

  constructor(private slideshowService: SlideshowService) {
    
  }

  ngOnInit(): void {
    this.slideshowService.getSlideshow().subscribe(res=>{
      this.slides = res;        
    }) 
  }
  callback(){
    if(this.renderSlides){
      this.renderSlides = false;

      $('.slideshow').jdSlider({
        wrap: '.slide-inner', //Especificar el slide que vamos a usar
        isAuto: true, //Inicia la animación automáticamente
        isLoop: true, //Al finalizar vuelve a comenzar
        interval: 7000, //Tiempo por cada slide
        isCursor: true, //Pausar animación con el mouse
      });
    }
  }
}

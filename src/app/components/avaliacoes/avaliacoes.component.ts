import { AfterViewInit, Component } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-avaliacoes',
  templateUrl: './avaliacoes.component.html',
  styleUrls: ['./avaliacoes.component.css']
})
export class AvaliacoesComponent implements AfterViewInit {
  ngAfterViewInit() {
    
    var swiper = new Swiper(".avaliacoes-slide", {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      grabCursor:true,
      centeredSlides:true,
      autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1040: {
          slidesPerView: 3,
        },
      },
    });
}
}
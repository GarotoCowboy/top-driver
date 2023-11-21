import { AfterViewInit, Component } from '@angular/core';
import Swiper from 'swiper';


@Component({
  selector: 'app-sessao-veiculo',
  templateUrl: './sessao-veiculo.component.html',
  styleUrls: ['./sessao-veiculo.component.css']
})
export class SessaoVeiculoComponent implements AfterViewInit {

 ngAfterViewInit() {
    var swiper = new Swiper(".slide-veiculo", {
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
        968: {
          slidesPerView: 3,
        },
      },
    });
}
}

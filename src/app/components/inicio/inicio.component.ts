import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  @HostListener('document:mousemove', ['$event'])
  mousemove(e:MouseEvent){
   
    const parallax = document.querySelectorAll<HTMLElement>('.inicio-parallax');
  
    parallax.forEach(elm =>{
       let velocidade = parseFloat(elm.getAttribute('data-speed') || '1');
          let x = (window.innerWidth - e.pageX * velocidade)/90;
          let y = (window.innerHeight - e.pageY * velocidade)/90;
          elm.style.transform = `translateX(${y}px) translateY(${x}px)`
    })
  
  }
  
  @HostListener('document:mouseleave', ['$event'])
  mouseleave(e:MouseEvent){
   
    const parallax = document.querySelectorAll<HTMLElement>('.inicio-parallax');
  
    parallax.forEach(elm =>{
    
          elm.style.transform = `translateX(0px) translateY(0px)`
    })
  
  }

}

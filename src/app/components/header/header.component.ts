import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

 /*abre a tela de login quando aperta no botão login*/
 abrirTelaLogin(){
  const formLogin = document.querySelector('.containerLogin');
  formLogin?.classList.toggle('active');
}

/*abre o menu responsivo quando clica no botão lateral*/
click(){
  const menu = document.querySelector("#menu-btn");
  const navbar = document.querySelector(".navbar");
  menu?.classList.toggle('fa-times');
 navbar?.classList.toggle('active');
}

scroll(){
  const menu = document.querySelector("#menu-btn");
  const navbar = document.querySelector(".navbar");

  

  menu?.classList.remove('fa-times');
 navbar?.classList.remove('active');
}


}

import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrls: ['./formulario-login.component.css']
})
export class FormularioLoginComponent {

  fecharTelaLogin(){
    const formLogin = document.querySelector('.containerLogin');
    formLogin?.classList.remove('active');
    console.log("funfou!!")
  }
}

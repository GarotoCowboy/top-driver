import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  fecharTelaCadastro(){
    const formLogin = document.querySelector('.containerLogin');
    formLogin?.classList.remove('active');
    console.log("funfou!!")
  }
}

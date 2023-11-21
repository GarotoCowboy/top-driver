import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { IconesComponent } from './components/icones/icones.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { FormularioLoginComponent } from './components/formulario-login/formulario-login.component';
import { SessaoVeiculoComponent } from './components/sessao-veiculo/sessao-veiculo.component';
import { ServicosComponent } from './components/servicos/servicos.component';
import { NossosVeiculosComponent } from './components/nossos-veiculos/nossos-veiculos.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { AvaliacoesComponent } from './components/avaliacoes/avaliacoes.component';
import { PaginaInicialComponent } from './pages/pagina-inicial/pagina-inicial.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IconesComponent,
    InicioComponent,
    FormularioLoginComponent,
    SessaoVeiculoComponent,
    ServicosComponent,
    NossosVeiculosComponent,
    NoticiasComponent,
    AvaliacoesComponent,
    PaginaInicialComponent,
    CadastroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

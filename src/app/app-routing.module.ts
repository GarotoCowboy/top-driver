import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ServicosComponent } from './components/servicos/servicos.component';
import { SessaoVeiculoComponent } from './components/sessao-veiculo/sessao-veiculo.component';
import { NossosVeiculosComponent } from './components/nossos-veiculos/nossos-veiculos.component';
import { PaginaInicialComponent } from './pages/pagina-inicial/pagina-inicial.component';
import { AvaliacoesComponent } from './components/avaliacoes/avaliacoes.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';

const routes: Routes = [
  {path:'pagina-inicial',component:PaginaInicialComponent},
  {path:'servicos',component:ServicosComponent},
  {path:'sessao-veiculo',component:SessaoVeiculoComponent},
  {path:'nossos-veiculos',component:NossosVeiculosComponent},
  {path:'avaliacoes', component:AvaliacoesComponent},
  {path:'noticias', component:NoticiasComponent},
  {path:'cadastro',component:CadastroComponent},
  {path:'',redirectTo: 'pagina-inicial',pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tela-inicial', 
    pathMatch: 'full'
  },
  {
    path: 'tela-inicial',
    loadChildren: () => import('./home/home.module').then(module => module.HomeModule)
  },
  {
    path: 'area-atuacao',
    loadChildren: () => import('./atuacao/atuacao.module').then(module => module.AtuacaoModule)
  },
  {
    path: 'sobre-nos',
    loadChildren: () => import('./sobre-nos/sobre-nos.module').then(module => module.SobreNosModule)
  },
  {
    path: 'informacoes',
    loadChildren: () => import('./informacoes/informacoes.module').then(module => module.InformacoesModule)
  },
  {
    path: '**',
    redirectTo: 'tela-inicial'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

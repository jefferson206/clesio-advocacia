import { TelaInicialComponent } from './containers/tela-inicial/tela-inicial.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
  
const routes: Routes = [
  {
    path: '',
    component: TelaInicialComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
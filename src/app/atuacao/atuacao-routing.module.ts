import { AreaAtuacaoComponent } from './containers/area-atuacao/area-atuacao.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: AreaAtuacaoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtuacaoRoutingModule { }

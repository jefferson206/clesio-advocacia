import { CivilTabComponent } from './components/civil-tab/civil-tab.component';
import { PenalTabComponent } from './components/penal-tab/penal-tab.component';
import { ConsumidorTabComponent } from './components/consumidor-tab/consumidor-tab.component';
import { EmpresarialTabComponent } from './components/empresarial-tab/empresarial-tab.component';
import { TrabalhadorTabComponent } from './components/trabalhador-tab/trabalhador-tab.component';
import { TributarioTabComponent } from './components/tributario-tab/tributario-tab.component';
import { AreaAtuacaoComponent } from './containers/area-atuacao/area-atuacao.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: AreaAtuacaoComponent
  },
  {
    path: 'trabalhador',
    component: TrabalhadorTabComponent
  },
  {
    path: 'tributario',
    component: TributarioTabComponent
  },
  {
    path: 'empresarial',
    component: EmpresarialTabComponent
  },
  {
    path: 'consumidor',
    component: ConsumidorTabComponent
  },
  {
    path: 'penal',
    component: PenalTabComponent
  },
  {
    path: 'civil',
    component: CivilTabComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtuacaoRoutingModule { }

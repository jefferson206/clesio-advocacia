import { BotaoTopComponent } from './components/atuacao-tab/botao-top.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtuacaoRoutingModule } from './atuacao-routing.module';
import { AreaAtuacaoComponent } from './containers/area-atuacao/area-atuacao.component';
import { AtuacaoTabComponent } from './components/atuacao-tab/atuacao-tab.component';
import { MaterializeButtonModule, MaterializeTabGroupModule } from 'materialize-angular';
import { TributarioTabComponent } from './components/tributario-tab/tributario-tab.component';
import { TrabalhadorTabComponent } from './components/trabalhador-tab/trabalhador-tab.component';
import { EmpresarialTabComponent } from './components/empresarial-tab/empresarial-tab.component';
import { ConsumidorTabComponent } from './components/consumidor-tab/consumidor-tab.component';
import { PenalTabComponent } from './components/penal-tab/penal-tab.component';
import { CivilTabComponent } from './components/civil-tab/civil-tab.component';


@NgModule({
  declarations: [BotaoTopComponent, AreaAtuacaoComponent, AtuacaoTabComponent, TributarioTabComponent, TrabalhadorTabComponent, EmpresarialTabComponent, ConsumidorTabComponent, PenalTabComponent, CivilTabComponent],
  imports: [
    CommonModule,
    AtuacaoRoutingModule,
    MaterializeTabGroupModule, 
    MaterializeButtonModule,
    RouterModule
  ]
})
export class AtuacaoModule { }
 
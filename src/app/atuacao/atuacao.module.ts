import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtuacaoRoutingModule } from './atuacao-routing.module';
import { AreaAtuacaoComponent } from './containers/area-atuacao/area-atuacao.component';
import { AtuacaoTabComponent } from './components/atuacao-tab/atuacao-tab.component';
import { MaterializeTabGroupModule } from 'materialize-angular';


@NgModule({
  declarations: [AreaAtuacaoComponent, AtuacaoTabComponent],
  imports: [
    CommonModule,
    AtuacaoRoutingModule,
    MaterializeTabGroupModule, 
  ]
})
export class AtuacaoModule { }

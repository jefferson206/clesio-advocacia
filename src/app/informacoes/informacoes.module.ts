import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformacoesRoutingModule } from './informacoes-routing.module';
import { InformacaoComponent } from './containers/informacao/informacao.component';
import { ContatoComponent } from './components/contato/contato.component';


@NgModule({
  declarations: [InformacaoComponent, ContatoComponent],
  imports: [
    CommonModule,
    InformacoesRoutingModule
  ],
  exports: [
    ContatoComponent
  ]
})
export class InformacoesModule { }

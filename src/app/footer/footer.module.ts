import { InformacoesModule } from './../informacoes/informacoes.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RodapeComponent } from './components/rodape/rodape.component';

@NgModule({
  declarations: [RodapeComponent],
  imports: [
    CommonModule,
    RouterModule,
    InformacoesModule
  ],
  exports: [RodapeComponent]
})
export class FooterModule { }

import { QuemSomosComponent } from './components/quem-somos/quem-somos.component';
import { HomeModule } from './../home/home.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SobreNosRoutingModule } from './sobre-nos-routing.module';
import { SobreNosComponent } from './containers/sobre-nos/sobre-nos.component';


@NgModule({
  declarations: [SobreNosComponent, QuemSomosComponent],
  imports: [
    CommonModule,
    SobreNosRoutingModule
  ],
  exports: [
    QuemSomosComponent
  ]
})
export class SobreNosModule { }

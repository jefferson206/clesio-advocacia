import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { TelaInicialComponent } from './containers/tela-inicial/tela-inicial.component';
import { ValoresEmpresaComponent } from './components/valores-empresa/valores-empresa.component';
import { MaterializeAccordionModule, MaterializeCardModule, MaterializeCollapsibleModule } from 'materialize-angular';
import { CaroucelComponent } from './components/caroucel/caroucel.component';
import { CardsAtuacaoComponent } from './components/cards-atuacao/cards-atuacao.component';
import { QuemSomosComponent } from './components/quem-somos/quem-somos.component';


@NgModule({
  declarations: [TelaInicialComponent, ValoresEmpresaComponent, CaroucelComponent, CardsAtuacaoComponent, QuemSomosComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterializeAccordionModule,
    MaterializeCollapsibleModule,
    NgbModule,
    MaterializeCardModule
  ]
})
export class HomeModule { }

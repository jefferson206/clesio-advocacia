import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards-atuacao',
  templateUrl: './cards-atuacao.component.html',
  styleUrls: ['./cards-atuacao.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CardsAtuacaoComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  irPara(rota: string): void {
    this.router.navigate([`area-atuacao/${rota}`], { queryParams: { display: true } })
  }
}

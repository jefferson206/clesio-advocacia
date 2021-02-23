import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-botao-top-atuacao',
    template: `
    <div class="d-flex" style="justify-content: flex-end;" *ngIf="mostrarBotao">
        <materialize-button routerLink="../">Ver todas as areas</materialize-button>
    </div>
    `,
    styleUrls: ['./atuacao-tab.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class BotaoTopComponent implements OnInit{
    mostrarBotao = false;

    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.verificaSeRotaPossuiParametro();
    }

    private verificaSeRotaPossuiParametro() {
        this.route.queryParams.subscribe(param => {
            this.mostrarBotao = param['display'];
        })
    }
}
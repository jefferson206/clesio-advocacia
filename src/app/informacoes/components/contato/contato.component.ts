import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contato',
  template: `
    <i class="bi-telephone"></i>
    Telefone: (44) 3267-1551
    <br>
    <i class="bi-whatsapp"></i>
    Whatsapp: (44) 9 8844-0060
    <br>
    <i class="bi-envelope"></i>
    e-mail: drclesio@hotmail.com`
})
export class ContatoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caroucel',
  templateUrl: './caroucel.component.html',
  styleUrls: ['./caroucel.component.scss']
})
export class CaroucelComponent implements OnInit {
  images: any[];
  responsiveOptions: any[];
  contador = ['001', '002', '003'];
  textoDescritivo = ['Nulla vitae elit libero, a pharetra augue mollis interdum Lorem ipsum dolor sit amet,' +
                      'consectetur adipiscing elitsdfa Nulla vitae elit libero, a pharetra augue mollis interdum' +
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elitsdfa',
                      'Nulla vitae elit libero, a pharetra augue mollis interdum Lorem ipsum dolor sit amet,' +
                      'consectetur adipiscing elitsdfa Nulla vitae elit libero, a pharetra augue mollis interdum' +
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elitsdfa',
                      'Nulla vitae elit libero, a pharetra augue mollis interdum Lorem ipsum dolor sit amet,' +
                      'consectetur adipiscing elitsdfa Nulla vitae elit libero, a pharetra augue mollis interdum' +
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elitsdfa'];
                      
  tituloImagem = ['Direiro Tributário', 'Direito Penal', 'Direito Trabalhista']
  constructor() { }

  ngOnInit(): void {
    this.images = this.contador.map(foto => `assets/images/principal/${foto}.jpg`)
  }
 
}
 
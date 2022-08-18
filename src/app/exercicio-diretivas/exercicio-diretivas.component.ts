import { Component } from '@angular/core';

import { MEMES_AGRUPADOS_POR_CATEGORIA } from '../const/exercicio.diretivas';

@Component({
  selector: 'app-exercicio-diretivas',
  templateUrl: './exercicio-diretivas.component.html',
  styleUrls: ['./exercicio-diretivas.component.scss']
})
export class ExercicioDiretivasComponent {

listaCategoria = MEMES_AGRUPADOS_POR_CATEGORIA;

PREFIXO_IMAGEM_URL = 'https://raw.githubusercontent.com/vitorfgsantos/angular-memes-diretivas/master/images';
listaFrutas = ['Maça','Laranja', 'Mamão', 'Pêra'];
carrosLista = [{
  placa: 'JND-7358',
  cor: 'Preto'
}, {
  placa: 'JFD-7458',
  cor: 'Azul'
}, {
  placa: 'OSU-2437',
  cor: 'Laranja'
}, {
  placa: 'ISO-4198',
  cor: 'Branco'
},
]

  condicao = true;

  mudarExibicao(){
    this.condicao = !this.condicao;
  }

  soma(numero1: any, numero2: any){
    return numero1 + numero2;
  }

}

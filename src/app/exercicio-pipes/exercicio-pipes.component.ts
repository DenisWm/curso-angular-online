import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio-pipes',
  templateUrl: './exercicio-pipes.component.html',
  styleUrls: ['./exercicio-pipes.component.scss']
})
export class ExercicioPipesComponent {

  filme={
    title: 'Harry Potter - A pedra filosofal',
    estrelas: 4.45454645,
    precoAluguel: 15.45,
    dataLancamento: new Date(2019, 5, 30),
  };  

  compras=[{
    produto: 'lâmpadas',
    valor: 299.29,
    quantidade: 2,
    peso: 0,
    data: new Date(2020,1,1,15,20),
  }, {
    produto: 'farinha',
    valor: 450.29,
    quantidade: 2,
    peso: 29.33333,
    data: new Date(2020,1,10,19,30),
  }
]

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercicio-data-binding',
  templateUrl: './exercicio-data-binding.component.html',
  styleUrls: ['./exercicio-data-binding.component.scss']
})
export class ExercicioDataBindingComponent implements OnInit {

  @Input() palavra: any;
  
  @Output() clicado = new EventEmitter();

  
  constructor() { }
  initialValue = 'nada';
  isDisabled = true;
  imageURL = 'https://www.petlove.com.br/dicas/wp-content/uploads/2021/08/Gato-filhote-1.jpg';

  ngOnInit(): void {
  }

  onClick($event: any){
    console.log('clicou', $event);
  }
  digitouAlgo($event: any){
    console.log(event)
  }

  passouMouse(){
    console.log('Alguem passou o mouse');
  }
  onClickBotaoEmissor($event: any){
    console.log('Devo emitir informações ao componente pai!');
    this.clicado.emit($event);
  }

}

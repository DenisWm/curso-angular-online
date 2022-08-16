import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent {

  @Input() valor = 0;
  @Output() emissorContagem = new EventEmitter();

  
  constructor() { }

  
  incremento(){
    this.valor +=1;
    this.emissorContagem.emit(this.valor);
  }

  decremento(){
    this.valor -= 1;
    this.emissorContagem.emit(this.valor);
  }

}

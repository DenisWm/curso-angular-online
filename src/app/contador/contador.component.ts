import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent {

  @Input() valor = 0;
  @Output() valorChange = new EventEmitter();

  
  constructor() { }

  
  incremento(){
    this.valor +=1;
    this.valorChange.emit(this.valor);
  }

  decremento(){
    this.valor -= 1;
    this.valorChange.emit(this.valor);
  }

}

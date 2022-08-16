import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  titulo = 'Seja bem-vindo!';
  pudim = 'uma palavra';
  constructor(){
    
  }

  eventoRecebido($event: any){
    console.log('AppComponent: EVENTO RECEBIDO:' + $event);
  }

  valorAtualizado($event: any){
    console.log('valor atualizado:', $event);
  }
}

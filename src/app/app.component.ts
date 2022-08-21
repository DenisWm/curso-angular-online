import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  titulo = 'Seja bem-vindo!';
  pudim = 'uma palavra';
  valorContador = 10;
  showHeader = true;
  
  constructor(){
    
  }
  ngOnInit(): void {
    
  }

  eventoRecebido($event: any){
    console.log('AppComponent: EVENTO RECEBIDO:' + $event);
  }

  valorAtualizado($event: any){
    console.log('valor atualizado:', $event);
  }
}

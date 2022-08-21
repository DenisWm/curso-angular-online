import { AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {

  @Input() titulo: any;
  
  constructor() { 
    console.log('Construtor')
  }
  

  ngOnChanges(){
    console.log("Changes");
  }
  ngOnInit(): void {
    console.log("ngOnInit");
  }

  ngAfterViewInit(){
    console.log("ngAfterViewInit");
  }

  ngOnDestroy(){
    console.log("Fui destruido");
  }

}

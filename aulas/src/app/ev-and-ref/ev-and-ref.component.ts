import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ev-and-ref',
  templateUrl: './ev-and-ref.component.html',
  styleUrls: ['./ev-and-ref.component.css']
})
export class EvAndRefComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cor: string ="white";

  changecolor(corR: string){
    this.cor = corR;
  }

  fade(fx){
    if(fx.style.opacity == '0')
    {
      fx.style.opcaity ='1';
    }
    fx.style.opacity = '0.5';
  }


  tamanho: number = 10;
  size(fx:HTMLElement){
    fx.style.height = this.tamanho + "px";
    this.tamanho *= 2;
  }

  acelara : number = 5;
  move(fx:HTMLElement){
    fx.style.transform = "rotate("+ this.acelara + "deg)";
  }
}

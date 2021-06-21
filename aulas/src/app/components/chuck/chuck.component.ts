import { Component, OnInit } from '@angular/core';
import {AskChuckService} from 'src/app/services/ask-chuck.service';


@Component({
  selector: 'app-chuck',
  templateUrl: './chuck.component.html',
  styleUrls: ['./chuck.component.css']
})
export class ChuckComponent implements OnInit {

  constructor(private chuckService: AskChuckService) { }

  ngOnInit(): void {
  }

  piada : string = "Wait for it";

  resultado : any;

  getjoke() {
      //this.piada = this.chuckService.piadaDoServico;
      this.chuckService.getjoke().subscribe(
        data =>
        {
          this.resultado = data
          this.piada = this.resultado.value
        }
      );
  }

  piadas : any;

  getmorepiadas(valoraPesquisar: string)
  {
    this.chuckService.getJokeFromCat(valoraPesquisar).subscribe(data => {this.piadas = data});
  }
}

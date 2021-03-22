import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name : string ="Luis";

  changeName(event){
    this.name = event.target.value;
  }

  arrayAnimais : Array<string> = ["cao", "gato", "papagaio", "texugo"];
}

import { Component, OnInit } from '@angular/core';
import { PhonebookService } from '../services/phonebook.service';

@Component({
  selector: 'app-escolhe-animal',
  templateUrl: './escolhe-animal.component.html',
  styleUrls: ['./escolhe-animal.component.css']
})
export class EscolheAnimalComponent implements OnInit {

  agendaService : PhonebookService;
  constructor(private pService: PhonebookService) {  }

  ngOnInit(): void {
  }

}

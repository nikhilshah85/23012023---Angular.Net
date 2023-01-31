import { Component, OnInit } from '@angular/core';
import { GreetingsService } from 'src/app/services/greetings.service';

@Component({
  selector: 'app-colddrinks',
  templateUrl: './colddrinks.component.html',
  styleUrls: ['./colddrinks.component.css']
})
export class ColddrinksComponent implements OnInit {

  _greetSerObj:GreetingsService;
  constructor(greetSerREF:GreetingsService) {
    this._greetSerObj = greetSerREF;
   }

  ngOnInit(): void {
  }

}

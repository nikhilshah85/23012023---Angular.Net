import { Component, OnInit } from '@angular/core';
import { GreetingsService } from 'src/app/services/greetings.service';

@Component({
  selector: 'app-cloths',
  templateUrl: './cloths.component.html',
  styleUrls: ['./cloths.component.css']
})
export class ClothsComponent implements OnInit {
  
  _greetSerObj:GreetingsService;
  constructor(greetSerREF:GreetingsService) {
    this._greetSerObj = greetSerREF;
   }

  ngOnInit(): void {
  }

}

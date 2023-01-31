import { Component, OnInit } from '@angular/core';
import { GreetingsService } from 'src/app/services/greetings.service';
@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.css']
})
export class CompBComponent implements OnInit {


  
  greetSer:GreetingsService = new GreetingsService();
  constructor() { }

  ngOnInit(): void {
  }

}

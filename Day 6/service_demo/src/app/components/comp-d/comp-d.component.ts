import { Component, OnInit } from '@angular/core';
import { GreetingsService } from 'src/app/services/greetings.service';

@Component({
  selector: 'app-comp-d',
  templateUrl: './comp-d.component.html',
  styleUrls: ['./comp-d.component.css']
})
export class CompDComponent implements OnInit {

  _greetSerObj:GreetingsService;

  //object will be created, if not present in memory by Angular
  constructor(greetSerREF:GreetingsService)
  {
      this._greetSerObj = greetSerREF;

  }
  ngOnInit(): void {
  }

}

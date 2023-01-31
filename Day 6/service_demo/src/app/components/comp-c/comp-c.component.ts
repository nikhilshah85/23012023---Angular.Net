import { Component, OnInit } from '@angular/core';
import { GreetingsService } from 'src/app/services/greetings.service';

@Component({
  selector: 'app-comp-c',
  templateUrl: './comp-c.component.html',
  styleUrls: ['./comp-c.component.css']
})
export class CompCComponent implements OnInit {


  _greetSerObj:GreetingsService;

  //object will be created by angular, if not present in memory,
  //and we get a referece to that object, through a variable greetSerREF, we pass that ref to our variable
                                                            
  constructor(greetSerREF:GreetingsService)
  {
      this._greetSerObj = greetSerREF;

  }

  ngOnInit(): void {
  }

}

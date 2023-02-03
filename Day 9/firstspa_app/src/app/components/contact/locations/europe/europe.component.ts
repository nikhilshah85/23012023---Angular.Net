import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-europe',
  templateUrl: './europe.component.html',
  styleUrls: ['./europe.component.css']
})
export class EuropeComponent implements OnInit {


  europeanCountries = ['Germany','Amsterdam','UK','France','Spain']
  constructor() { }

  ngOnInit(): void {
  }

}

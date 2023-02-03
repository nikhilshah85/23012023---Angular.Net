import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asia',
  templateUrl: './asia.component.html',
  styleUrls: ['./asia.component.css']
})
export class AsiaComponent implements OnInit {


  asianCountries = [
    'India','Thailand','Hong Kong','China','Nepal','Sri-Lanka'
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

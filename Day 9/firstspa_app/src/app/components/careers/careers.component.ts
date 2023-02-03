import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {
 

    currentOpenings =['Angular Developer', '.Net Developer','Azure Architech', 'DevOps Manager','React','API and Design Patterns','MERN Stack','MEAN Stack']


  constructor() { }

  ngOnInit(): void {
  }

}

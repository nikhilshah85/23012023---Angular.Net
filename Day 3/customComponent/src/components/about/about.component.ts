import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent{

  teamSize = 30;
  whatDoWeDo = "Web Development";
  domain = ['Hotels','Insurance','Pharma','Petro Chemicals','Shopping'];
  areWeRegistered = true;

}

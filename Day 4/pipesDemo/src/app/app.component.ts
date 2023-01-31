import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {



  firstName = "Nikhil";
  lastName = "shah";
  salary = 8000;
  favDate = new Date();

  educationalDetails ={
    highestDegree:'MCA',
    percentile : 0.88,
    university : 'Pune',
    schooling : 'Mumbai',
    certificates : 5
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent {

  accountDetails = [
    {accNo:101, accFirstName:'Nikhil',accLastName:'shah',accGender:'Male',accBalance:9000,accIsActive:true, accType:'Savings'},
    {accNo:102, accFirstName:'Sumit',accLastName:'Agarwal',accGender:'Male',accBalance:2000,accIsActive:true, accType:'Current'},
    {accNo:103, accFirstName:'Priya',accLastName:'Jain',accGender:'Female',accBalance:1200,accIsActive:true, accType:'Current'},
    {accNo:104, accFirstName:'Anjali',accLastName:'Mehta',accGender:'Female',accBalance:13000,accIsActive:false, accType:'Savings'},
    {accNo:105, accFirstName:'Suresh',accLastName:'Reddy',accGender:'Male',accBalance:14000,accIsActive:true, accType:'Savings'},
    {accNo:106, accFirstName:'Rohit',accLastName:'Kashyap',accGender:'Male',accBalance:18000,accIsActive:false, accType:'PF'},
  ]

}

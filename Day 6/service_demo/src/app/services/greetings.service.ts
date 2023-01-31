import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GreetingsService {

  greetMessage = "Hello and Welcome to Angular Service World";
  totalDeveloper = 20;

  //this is the data which will come from WebAPI call, never hard-coded !!
  productDetails = [
    {pId:101, pName:'Pepsi',pCategory:'Cold-Drink', pPrice:50},
    {pId:102, pName:'Appy',pCategory:'Cold-Drink', pPrice:50},
    {pId:103, pName:'TShirt',pCategory:'Cloths', pPrice:50},
    {pId:104, pName:'Jean',pCategory:'Cloths', pPrice:50},
    {pId:105, pName:'Fanta',pCategory:'Cold-Drink', pPrice:50},
    {pId:106, pName:'Maaza',pCategory:'Cold-Drink', pPrice:50},
  ]

  coldDrinkProducts:any[] = [];
  clothProducts:any[] = [];

 private SegegrateProducts()
  {
    for (let index = 0; index < this.productDetails.length; index++) {
     if (this.productDetails[index].pCategory == 'Cold-Drink') {
        this.coldDrinkProducts.push(this.productDetails[index]);
     }
     else
     {
      this.clothProducts.push(this.productDetails[index]);
     }
      
    }
  }


  counter = 0;

  incrementCounter()
  {
    this.counter++;
    return this.counter;
  }

  
  greetUser()
  {
    console.log("It is so good to see you here");
    
    alert('It is so good to see you here');
  }

  addNumbers(n1:number,n2:number)
  {
    return n1 + n2;
  }


  constructor() { 
    this.SegegrateProducts();

  }
}

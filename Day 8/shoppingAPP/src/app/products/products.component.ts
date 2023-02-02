import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

    _httpCall:HttpClient;
    productsList:any;

  constructor(_httpCallREF:HttpClient)
   {
      this._httpCall = _httpCallREF;
  }

    getProducts()
    {
      this._httpCall.get('https://localhost:7174/api/ProductDetails').subscribe( p =>{
        this.productsList  = p;
        return this.productsList;
      })
    }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent {

 stockDetails = [
  {stockId:101, stockName:'RIL', stockCategory:'PetroChemical', purchasePrice:3,currentPrice:6,purchaseQty:2},
  {stockId:102, stockName:'TCS', stockCategory:'IT', purchasePrice:10,currentPrice:2,purchaseQty:2},
  {stockId:103, stockName:'Maruti', stockCategory:'Automobiles', purchasePrice:10,currentPrice:30,purchaseQty:2},
  {stockId:104, stockName:'Ashok Leyland', stockCategory:'Automobiles', purchasePrice:5,currentPrice:8,purchaseQty:2},
  {stockId:105, stockName:'Cipla', stockCategory:'Pharma', purchasePrice:3,currentPrice:3,purchaseQty:2},
  {stockId:106, stockName:'Infy', stockCategory:'IT', purchasePrice:8,currentPrice:4,purchaseQty:2},
  {stockId:107, stockName:'HCL', stockCategory:'IT', purchasePrice:4,currentPrice:7,purchaseQty:2},
  {stockId:108, stockName:'Wipro', stockCategory:'IT', purchasePrice:1,currentPrice:3,purchaseQty:2},
  {stockId:109, stockName:'Ambuja', stockCategory:'Cement', purchasePrice:2,currentPrice:2,purchaseQty:2},
  {stockId:110, stockName:'Tata Elexi', stockCategory:'Automobiles', purchasePrice:3,currentPrice:9,purchaseQty:2}

 ];

}

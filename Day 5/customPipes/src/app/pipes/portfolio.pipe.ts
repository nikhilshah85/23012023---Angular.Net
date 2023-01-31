import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'portfolio'
})
export class PortfolioPipe implements PipeTransform {

 
    transform(value: any, stockDetails:any) {
      
     let totalPurchasePrice = 0;
     let totalCurrentPrice = 0;

     let differnce = 0;

     for (let index = 0; index < stockDetails.length; index++) {
      totalPurchasePrice = (totalPurchasePrice + stockDetails[index].purchasePrice) * stockDetails[index].purchaseQty;
      totalCurrentPrice = (totalCurrentPrice + stockDetails[index].currentPrice) * stockDetails[index].purchaseQty ;           
     }
     console.log(totalPurchasePrice);
     console.log(totalCurrentPrice)
     differnce = totalCurrentPrice - totalPurchasePrice;
     console.log(differnce);

     if ( totalPurchasePrice < totalCurrentPrice ) {
        return 'Profit of ' + differnce;
     }
     return 'Loss of ' +  differnce;

    }



}

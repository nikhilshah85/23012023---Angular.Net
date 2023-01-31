import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'totalInvestment'
})
export class TotalInvestmentPipe implements PipeTransform {


totalInv:number = 0;
transform(value: any, allPurchaseValue:any):number {

  for (let index = 0;index < allPurchaseValue.length ; index++) {
    this.totalInv = this.totalInv + allPurchaseValue[index].purchasePrice;
  }
  return this.totalInv

}


}

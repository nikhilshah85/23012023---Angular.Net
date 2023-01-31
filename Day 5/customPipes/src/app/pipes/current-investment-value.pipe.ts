import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currentInvestmentValue'
})
export class CurrentInvestmentValuePipe implements PipeTransform {

  currentInvestment:number = 0;
transform(value: any, allPurchaseValue:any):number {

  for (let index = 0;index < allPurchaseValue.length ; index++) {
    this.currentInvestment = this.currentInvestment + allPurchaseValue[index].currentPrice;
  }
  return this.currentInvestment

}
}

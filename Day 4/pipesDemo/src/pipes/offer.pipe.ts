import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Pipe({
  name: 'offer'
})
export class OfferPipe implements PipeTransform {

  transform(value:number, acctype:string, balance:number): string {
    if(acctype == 'Savings')
    {
      return "You have a loan offer of A$" + (balance * 2);
    }
    else if(acctype == 'Current')
    {
      return "You have Credit Card Offer of 200000"
    }
    else if(acctype =='PF')
    {
      return "No Offer";
    }
    return "";
  }

}

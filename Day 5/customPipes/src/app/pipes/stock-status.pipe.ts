import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stockStatus'
})
export class StockStatusPipe implements PipeTransform {


    transform(value: any, purchase:number,current:number) {
        if(purchase > current)
        {
          return 'Loss';
        }
        else if(purchase < current)
        {
          return 'Profit';
        }
        return 'BEP';


    }

}

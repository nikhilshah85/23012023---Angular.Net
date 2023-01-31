import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value: string,gender:string): string {
    if(gender == "Male")
    {
      return "Mr." + value;
    }
    return "Miss." + value;

  }

}

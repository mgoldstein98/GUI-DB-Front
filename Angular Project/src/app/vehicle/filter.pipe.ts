import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'filter',
    pure: false
})

export class FilterPipe implements PipeTransform {
    
    transform(value: any, args?: any): any {
        if (!args) {
          return value;
        }
        return value.filter((val) => {
          let rVal = val.vehicleName.includes(args) ;
          return rVal;
        })
    
      }
}


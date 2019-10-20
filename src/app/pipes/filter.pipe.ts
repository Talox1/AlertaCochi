import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultRestaurants =[];

    for(const restaurat of value){
        if(restaurat.name.toLowerCase().indexOf(arg.toLowerCase()) > -1){
          resultRestaurants.push(restaurat)
        }
    }

    return resultRestaurants;
  }

}

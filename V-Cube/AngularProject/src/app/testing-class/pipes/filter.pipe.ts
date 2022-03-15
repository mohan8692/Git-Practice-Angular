import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value:any[], serchText:string): any {

   return value.filter(function(search: any){
    //return search.firstname.toLowerCase().indexOf(serchtext.toLocaleLowerCase()) > -1
    return search.firstname.toLowerCase().indexOf(serchText) > -1

  });
  }

}

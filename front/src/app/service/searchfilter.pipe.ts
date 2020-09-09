import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class searchFilterPipe implements PipeTransform {

  transform(items: any, trd: any): any {

  	if(!items) return [];
  	if(!trd) return items;

  	var count = 0;

    return items.filter(it => {
    	return it.metier.includes(trd);
    })
  }

}

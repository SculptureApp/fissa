import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'profilter'
})
export class ProfilterPipe implements PipeTransform {

  transform(items: any[], tradeName: any): any {

  	if(!items) return [];
  	if(!tradeName) return items;

    return items.filter(it => {
    	return it.metier.toLowerCase().includes(tradeName);
    });
  }

}

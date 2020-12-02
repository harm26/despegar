import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchDescription'
})
export class SearchDescriptionPipe implements PipeTransform {

  transform(deliveries: any, text: any): any {

    const resulDescrip =[];

for (const deliverie of deliveries) {
  if(text.length<3)
  return deliveries
  if (deliverie.description.toLowerCase().includes( text.toLowerCase() )) {
    resulDescrip.push(deliverie);    
  }
}
return resulDescrip;
  }
}

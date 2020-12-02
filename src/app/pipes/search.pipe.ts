import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform( deliveries : any, text: any): any {

const resulDeliveries =[];

for (const deliverie of deliveries) {
  if(text.length<3)
  return deliveries
  if (deliverie.name.toLowerCase().includes( text.toLowerCase()) ) {
    resulDeliveries.push(deliverie);  
    
  }
  
}
 return resulDeliveries;

  }

}

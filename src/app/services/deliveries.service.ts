import { Injectable } from '@angular/core';

import { DELIVERIES } from './../mock/mock_deliveries';
import { Deliverie } from './../interfaces/deliverie';




@Injectable({
  providedIn: 'root'
})
export class DeliveriesService {

  getDeliveries():Deliverie[]{
    return DELIVERIES;
  };



  constructor() { }
}

import { DeliveriesService } from './../../services/deliveries.service';

import { Component, OnInit, } from '@angular/core';
import { Deliverie } from 'src/app/interfaces/deliverie';

@Component({
  selector: 'app-deliveries',
  templateUrl: './deliveries.component.html',
  styleUrls: ['./deliveries.component.css']
})
export class DeliveriesComponent implements OnInit { 

  filterDeli = "";
  filterDescrip = "";


  constructor(private deliveriesService: DeliveriesService) { }

  ngOnInit(): void {
    this.getDeliveries();
  }
  deliveries:Deliverie[];

  getDeliveries(): void{
    this.deliveries = this.deliveriesService.getDeliveries();
  };
}

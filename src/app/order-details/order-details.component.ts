import { Component, OnInit } from '@angular/core';
import { GlobaldataproviderService } from '../servicesD/globaldataprovider.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  constructor(private dataservice:GlobaldataproviderService) { 
  
  }
  customername:string;
selectedCustomerData:any = new Array();
  ngOnInit() {
   this.getSelectedCustomerinfo();
  }
  getSelectedCustomerinfo() {
    this.selectedCustomerData = this.dataservice.getSelectedCustomerData();
    this.customername = this.selectedCustomerData.name;
  }
  
}

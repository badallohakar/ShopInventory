import { Component, OnInit } from '@angular/core';
import { GlobaldataproviderService } from '../servicesD/globaldataprovider.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

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

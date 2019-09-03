import { Component, OnInit } from '@angular/core';
import {Customers} from '../customers';
  import { from } from 'rxjs';
import { GlobaldataproviderService } from '../servicesD/globaldataprovider.service';
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  constructor(private dataservice:GlobaldataproviderService) { }
  serialn:number = 0;
  customerselectd:string;
  index:number = 1;
  customergotdata:any[] = new Array();

  
  ngOnInit() {
    this.getCustomerList();
  }
  getmeserial(){
    this.serialn+=1;
  }

  getCustomerList(){
    this.customergotdata = this.dataservice.getcustomerlist();
    console.log(this.customergotdata);
  }
customerclick(datai:any,inu:number) {
  this.dataservice.setCustomerData(datai,inu); 
  
}
  

}

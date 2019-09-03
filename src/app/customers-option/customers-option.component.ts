import { Component, OnInit } from '@angular/core';
import { GlobaldataproviderService } from '../servicesD/globaldataprovider.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-customers-option',
  templateUrl: './customers-option.component.html',
  styleUrls: ['./customers-option.component.css']
})
export class CustomersOptionComponent implements OnInit {

  constructor(private dataservice:GlobaldataproviderService,private router:Router) { }
  deletestatus:number;
  ngOnInit() {

  }
  deleteData(){
    this.deletestatus = this.dataservice.deleteSelectedCustomer();
    if(this.deletestatus){
        alert("Customer Deleted");
        this.router.navigate(['/customers/']);
    }else{
      alert("Failed to Delete");
    }
  }

}

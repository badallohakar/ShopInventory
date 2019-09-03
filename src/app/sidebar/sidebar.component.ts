import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { GlobaldataproviderService } from '../servicesD/globaldataprovider.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
status:string = "";
validationstatus:number = 1;
  constructor(private dataservice:GlobaldataproviderService,private router:Router) { }
flag :number;
  ngOnInit() {
  }

  resetdata(data:NgForm){
      data.reset();
  }

  registerCustomer(data:NgForm){

    this.validationstatus  = this.validatedData(data);
    if(this.validationstatus ){
      this.flag = this.dataservice.addnewCustomer(data);
      // console.log(data.value.name);
       if(this.flag ){
          this.status = "Succefully Added Customer" 
          this.router.navigate(['/customers']);
       }else{
         this.status = "Failed to Add Customer" 
       }
   }else{
     this.status = "Please Enter valid Input Values" 
   }
      
      data.reset();
  }

  validatedData(data:NgForm):number{
      if(data.value.cname == undefined || data.value.number == undefined || data.value.add == undefined || data.value.pid == undefined
         || data.value.pprice == undefined || data.value.pname == undefined){
          return 0;
      }else{
        return 1;
      }

  }
}

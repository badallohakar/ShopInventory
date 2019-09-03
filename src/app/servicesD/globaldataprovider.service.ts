import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class GlobaldataproviderService {
 
  

  constructor() { }
plen:number;
adlen:number;
  customerlists = [
    {name:"bob",contact:123,add:"US",productid:"p121",productname:"Pen",productprice:"15"},
    {name:"Sya",contact:123,add:"USA",productid:"p122",productname:"Rubber",productprice:"5"},
    {name:"Sam",contact:123,add:"CAN",productid:"p123",productname:"Eraser",productprice:"2"}
  ];

  selectedcustomerdata:any;
  selectedcustomername:string;
  selectedcustomerindex:number;
getcustomerlist(){
  return this.customerlists;
}

setCustomerData(datai: any,i:number) {
  this.selectedcustomerdata = datai;
  this.selectedcustomername = this.selectedcustomerdata.name;
  this.selectedcustomerindex = i;
}
deleteSelectedCustomer():number {
// console.log(this.selectedcustomerdata.index);
 this.plen = this.customerlists.length;
 this.customerlists.splice(this.selectedcustomerindex,1);
 if(this.plen != this.customerlists.length){
  return 1;
  }else{
    return 0;
  }
}

addnewCustomer(data: NgForm): number {

  this.plen = this.customerlists.length;

  this.customerlists.push({name:data.value.cname,contact:data.value.number,add:data.value.add,productid:data.value.pid,
    productname:data.value.pname,productprice:data.value.pprice});

console.log(data.value.name);

 if(this.plen != this.customerlists.length){
 return 1;
 }else{
   return 0;
 }

 
}

getselectedcustomername(){
  return this.selectedcustomername;
}
getSelectedCustomerData(){
  return this.selectedcustomerdata;
}

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomersOptionComponent } from './customers-option/customers-option.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { DefaultcomponentComponent } from './defaultcomponent/defaultcomponent.component';

  import { from } from 'rxjs';
import { DashoboardComponent } from './dashoboard/dashoboard.component';
const appRoutes:Routes=[
  
  {path:'customers',component:SidebarComponent,children:[
    {path:'customerlist',component:CustomerListComponent,children:[
      {path:'customeroptions',component:CustomersOptionComponent,children:[
        {path:'details',component:CustomerDetailsComponent},
        {path:'order',component:OrderDetailsComponent},
        {path:'pnf',component:DefaultcomponentComponent},
      ]},
      {path:'dashboard',component:DashoboardComponent},
      {path:'',component:DefaultcomponentComponent}
    ]},
    {path:'',component:CustomerListComponent}
  ]}, 
  {path:'',redirectTo:'/customers',pathMatch:'full'}
  
]

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CustomerListComponent,
    CustomersOptionComponent,
    CustomerDetailsComponent,
    OrderDetailsComponent,
    DefaultcomponentComponent,
    DashoboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

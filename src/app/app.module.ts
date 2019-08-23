import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule, RoutingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserServices } from './Services/user-service';
import { EmployeesComponent } from './employees/employees.component';
//import { ViewEmployeesComponent } from './view-employees/view-employees.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    EmployeesComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [UserServices],
  bootstrap: [AppComponent]
})
export class AppModule { }

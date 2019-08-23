import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ViewEmployeesComponent } from './view-employees/view-employees.component';

const routes: Routes = [
  {path:'', component:UserComponent},
  {path:'viewprofile', component:UserComponent },
  {path:'viewemployees', component:ViewEmployeesComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const RoutingComponents=[UserComponent,
                            ViewEmployeesComponent

                            ]

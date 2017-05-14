import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { DepartmentComponent } from './department/department.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
    //   {path: '', component: DepartmentComponent},
      {path: '',redirectTo: '/departmentList', pathMatch: 'full'},
      {path: 'departmentList', component: DepartmentComponent},
      {path: 'employees', component: EmployeeListComponent},
      {path: 'employees/details', component: EmployeeDetailsComponent},
      {path: 'departmentList/:id', component: DepartmentDetailsComponent},
      {path: '**', component: PageNotFoundComponent},
    ];

@NgModule({
  imports: [
      RouterModule.forRoot(routes)
  ],
  exports: [
      RouterModule
  ]
})

export class AppRoutingModule{}
export const routingComponents = [
    HomeComponent,
    PageNotFoundComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    DepartmentComponent,
    DepartmentDetailsComponent
    ];
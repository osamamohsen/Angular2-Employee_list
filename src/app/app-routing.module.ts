import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';

import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { DepartmentComponent } from './department/department.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';

const routes: Routes = [
      {path: 'departments', component: DepartmentComponent},
      {path: 'employees', component: EmployeeListComponent},
      {path: 'employees/details', component: EmployeeDetailsComponent},
      {path: 'departments/:id', component: DepartmentDetailsComponent}
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
    EmployeeListComponent,
    EmployeeDetailsComponent,
    DepartmentComponent,
    DepartmentDetailsComponent
    ];
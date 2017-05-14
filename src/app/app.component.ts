import { Component } from '@angular/core';
import { Server } from '../apiData/server';

import { EmployeeService } from './Service/employee.service';
import { DepartmentService } from './Service/department.service';
@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
    <app-home></app-home>
    <nav>
      <a routerLink="/departmentList" routerLinkActive="active">Departments</a>
      <a routerLink="/employees" routerLinkActive="active">Employees</a>
      <a routerLink="/employees/details" routerLinkActive="active">Employees Details</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css'],
  providers: [EmployeeService,DepartmentService,Server]

})
export class AppComponent {
  title = 'app works!';
}

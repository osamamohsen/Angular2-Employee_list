import { Component } from '@angular/core';
import { EmployeeService } from './Employee-Service/employee.service';
import { Server } from '../apiData/server';
@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
    <app-employee-list></app-employee-list>
    <app-employee-details></app-employee-details>
  `,
  styleUrls: ['./app.component.css'],
  providers: [EmployeeService,Server]

})
export class AppComponent {
  title = 'app works!';
}

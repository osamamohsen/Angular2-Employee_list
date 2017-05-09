import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../Employee-Service/employee.service';

@Component({
  selector: 'app-employee-details',
  // templateUrl: './employee-details.component.html',
  template: `
      <ul>
        <li *ngFor="let employee of employees">
          {{employee.id}}.{{ employee.name}} - {{ employee.gender}}
        </li>
      </ul>
  `,
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  employees = [];
  constructor(private _employeeService: EmployeeService) {}
  
  //http get all employees
  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
  }
}

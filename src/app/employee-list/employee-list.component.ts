import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../Employee-Service/employee.service';

@Component({
  selector: 'app-employee-list',
  // templateUrl: './employee-list.component.html',
  template: `
      <ul>
        <li *ngFor="let employee of employees">
          {{ employee.name}}
        </li>
      </ul>
  `,
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees = [];
  constructor(private _employeeService: EmployeeService) {}
  
  //http get all employees
  ngOnInit() {
    console.log("HERE");
    this._employeeService.getEmployees()
        .subscribe(resEmployeeData => this.employees = resEmployeeData);
  }
}

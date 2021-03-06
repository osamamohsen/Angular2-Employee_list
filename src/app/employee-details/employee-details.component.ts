import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../Service/employee.service';

@Component({
  selector: 'app-employee-details',
  // templateUrl: './employee-details.component.html',
  template: `
      <h2>Employee Details</h2>
      <h3>{{ errorMsg }}</h3>
      <ul>
          <li *ngFor="let employee of employees">
             {{employee.id}}. {{ employee.name }} - {{ employee.gender}}
          </li>
      </ul>
  `,
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  employees = [];
  errorMsg: string;
  constructor(private _employeeService: EmployeeService) {}
  
  // http get all employees
  ngOnInit() {
    this._employeeService.getEmployees()
            .subscribe(resEmployeeData  => this.employees = resEmployeeData.employee,
                       resEmployeeError => this.errorMsg = resEmployeeError);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; //for change routing
import { DepartmentService } from '../Service/department.service';

@Component({
  selector: 'app-department',
  // templateUrl: './department.component.html',
  template: `
      <h2>Department List</h2>
      <h3>{{ errorMsg }}</h3>
      <ul class="items">
        <li (click)="onSelect(department)" *ngFor="let department of departments">
          <span class="badge">{{ department.id }} </span> {{ department.name }}
        </li>
      </ul>
  `,
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  departments = []; // carry all department
  errorMsg: string; // error message

  /*
    DepartmentService: Service Call
    Router: for change route service
  */
  constructor(private departmentService: DepartmentService,private router: Router) { }

  // get all departments when start of department page
  ngOnInit() {
    this.departmentService.getDepartments()
    .subscribe(resDepartmentService => this.departments = resDepartmentService.department,
    resDepartementError => this.errorMsg = resDepartementError);
  }

  // (event) select specific department
  onSelect(department){
    // route: /departments/:id
    this.router.navigate(['/departments',department.id]);
  }


}

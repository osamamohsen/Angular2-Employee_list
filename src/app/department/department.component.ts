import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute , Params } from '@angular/router'; //for change routing
import { DepartmentService } from '../Service/department.service';

@Component({
  selector: 'app-department',
  // templateUrl: './department.component.html',
  template: `
      <h2>Department List</h2>
      <h3>{{ errorMsg }}</h3>
      <ul class="items">
        <li (click)="onSelect(department)" [class.selected]="isSelected(department)" *ngFor="let department of departments">
          <span class="badge">{{ department.id }} </span> {{ department.name }}
        </li>
      </ul>
  `,
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  departments = []; // carry all department
  errorMsg: string; // error message
  public selectedId;

  /*
    DepartmentService: Service Call
    Router: for change route service
  */
  constructor(private departmentService: DepartmentService,private router: Router,private route: ActivatedRoute) { }

  // get all departments when start of department page
  ngOnInit() {
    this.departmentService.getDepartments()
    .subscribe(resDepartmentService => this.departments = resDepartmentService.department,
    resDepartementError => this.errorMsg = resDepartementError);
    
    // departments/:id match this id
    // here listen for every change in route paramaters and change it

    this.route.params.subscribe((params: Params) =>{
      let id =  parseInt(params['id']);
      this.selectedId = id;
    });

  }

  // (event) select specific department
  onSelect(department){
    // route: /departments/:id
    // this.router.navigate(['/departments',department.id]);
    // this.router.navigate([this.route], {queryParams: {}});
    
    // console.log(this.route);
    // this.router.navigate([department.id], {queryParams: {}});
    // this.router.navigate([department.id],{relativeTo: this.route });
    this.router.navigate([department.id],{ relativeTo: this.route , queryParams: {}});

    this.selectedId = department.id;
  }

  isSelected(department){
    return department.id === this.selectedId;
  }

}

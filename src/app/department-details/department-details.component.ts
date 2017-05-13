import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  // selector: 'app-department-deatils',
  // templateUrl: './department-deatils.component.html',
  template: '<h3>you select department with id = {{ departmentId }}</h3>',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {

  public departmentId;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // departments/:id match this id
    let id = this.route.snapshot.params['id'];
    this.departmentId = id;
  }

}

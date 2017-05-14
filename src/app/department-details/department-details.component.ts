import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router , Params } from '@angular/router';

@Component({
  // selector: 'app-department-deatils',
  // templateUrl: './department-deatils.component.html',
  template: `
          <h3>you select department with id = {{ departmentId }}</h3>
          <a (click)="prev()">Previous</a>
          <a (click)="next()">Next</a>
          <p>
            <button (click)="gotoDepartment()">Back</button>
          </p>
          `,
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {

  public departmentId;
  constructor(private route: ActivatedRoute, private router: Router) { }

/*  
  ngOnInit() {
    // departments/:id match this id
    let id = parseInt(this.route.snapshot.params['id']);
    this.departmentId = id;
  }
*/

  ngOnInit() {
    // departments/:id match this id
    // here listen for every change in route paramaters and change it
    this.route.params.subscribe((params: Params) =>{
      let id =  parseInt(params['id']);
      this.departmentId = id;
    });
  }

  prev(){
    let previousId = this.departmentId - 1;
    // this.router.navigate(['/departments',previousId]);
    this.router.navigate(['../'+previousId],{ relativeTo: this.route });
  }


  next(){
    let nextId = this.departmentId + 1;
    // this.router.navigate(['/departments',nextId]);
    this.router.navigate(['../'+nextId],{ relativeTo: this.route });
    
  }

  gotoDepartment(){
    let selectedID = this.departmentId ? this.departmentId : null;
    // this.router.navigate(['/departments',{id: selectedID}]);
    this.router.navigate(['../', {id: selectedID}]);
  }
}

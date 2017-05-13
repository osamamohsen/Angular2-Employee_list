import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentDetailsComponent } from './department-details.component';

describe('DepartmentDeatilsComponent', () => {
  let component: DepartmentDeatilsComponent;
  let fixture: ComponentFixture<DepartmentDeatilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentDeatilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentDeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

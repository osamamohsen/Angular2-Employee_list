import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService{
    getEmployees(){
        return [
            {"id":1,"name":"osama","gender":"male"},
            {"id":2,"name":"hoda","gender":"female"},
            {"id":3,"name":"mostafa","gender":"male"},
            {"id":4,"name":"marwa","gender":"female"},
        ];
    }
}
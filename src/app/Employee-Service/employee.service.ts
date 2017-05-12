import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';    

@Injectable()
export class EmployeeService{
    private _url: string = "http://localhost:8000/api/employees";
    constructor(private _http: Http){}
    getEmployees(){
        return this._http.get(this._url)
                .map((response: Response)=>response.json());
    }
}
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs';    

@Injectable()
export class EmployeeService{
    private _url: string = "../../apiData/employeedata";
    constructor(private _http: Http){}
    getEmployees(){
        return this._http.get(this._url)
                .map((response: Response)=>response.json())
                 .catch(this.errorHandler);
    }
    errorHandler(error: Response){
        console.error(error);
        return Observable.throw(error || "Server Error");
    }
}
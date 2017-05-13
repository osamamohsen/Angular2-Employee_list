import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Server } from '../../apiData/server';
import 'rxjs/add/operator/map';    
import 'rxjs/add/operator/catch';    
import 'rxjs/add/observable/throw';    

@Injectable()
export class EmployeeService{
    url_http: string; 
    private _url: string;
    constructor(private _http: Http,private server: Server){
        this.url_http = server.server_http;
        this._url = this.url_http+"api/employees";
    }
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
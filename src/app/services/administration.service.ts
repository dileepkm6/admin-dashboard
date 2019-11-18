import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdministrationService {

  constructor(private _http:HttpClient) { }

  getEmployees()
  {
    return this._http.get<any>("https://jsonplaceholder.typicode.com/users");
  }
  getDepartments()
  {
    return this._http.get("");
  }

  deleteEmployee()
  {
    return this._http.delete("");
  }
}

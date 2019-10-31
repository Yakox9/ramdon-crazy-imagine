import { Injectable } from '@angular/core';
import {Employee} from '../interface/employee';
import {Employees} from '../interface/employees';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  constructor() { }

  getEmployees(): Observable<Employee[]>{
    return of (Employees);
  }
}

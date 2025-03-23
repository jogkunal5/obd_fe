import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {
    private apiUrl = 'http://localhost:3001/api/employees';

    constructor(private http: HttpClient) { }

    getAllEmployees(): Observable<Employee[]> {
        return this.http.get<Employee[]>(this.apiUrl);
    }
}

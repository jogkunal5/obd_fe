import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Employee } from '../../models/employee.model';
import { EmployeeService } from '../../service/employee.service';

@Component({
    selector: 'app-employee-list',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './employee-list.component.html',
})
export class EmployeeListComponent implements OnInit {
    employees: Employee[] = [];
    loading = true;
    error = '';

    constructor(private employeeService: EmployeeService) { }

    ngOnInit(): void {
        this.employeeService.getAllEmployees().subscribe({
            next: (data) => {
                this.employees = data;
                this.loading = false;
            },
            error: (err) => {
                this.error = 'Failed to fetch employees';
                console.error(err);
                this.loading = false;
            },
        });
    }
}

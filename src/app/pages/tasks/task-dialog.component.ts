import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { Task } from '../../service/tasks.service';

@Component({
    selector: 'app-task-dialog',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        DialogModule,
        DropdownModule,
        CalendarModule,
        ButtonModule,
        InputTextModule,
        TextareaModule
    ],
    templateUrl: './task-dialog.component.html'
})
export class TaskDialogComponent {
    @Input() visible: boolean = false;
    @Input() task: Task = {
        task_name: '',
        task_id: 0,
        onboarding_emp_id: 0,
        task_assignee_id: 0,
        department_id: '',
        description: '',
        status: '',
        due_date: new Date()
    };
    @Input() statuses: any[] = [];
    @Input() departments: any[] = [];
    @Input() employees: any[] = [];
    @Input() submitted: boolean = false;

    @Output() save: EventEmitter<void> = new EventEmitter();
    @Output() close: EventEmitter<void> = new EventEmitter();

    hideDialog() {
        this.close.emit();
    }

    saveTask() {
        this.save.emit();
    }
}

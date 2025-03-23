import { Component, OnInit, signal, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { Task, TaskService } from '../../service/tasks.service';
import { TaskDialogComponent } from './task-dialog.component';

@Component({
    selector: 'app-tasks',
    standalone: true,
    imports: [
        CommonModule,
        TableModule,
        FormsModule,
        ButtonModule,
        RippleModule,
        ToastModule,
        ToolbarModule,
        TaskDialogComponent
    ],
    templateUrl: './tasks.component.html',
    providers: [MessageService, TaskService, ConfirmationService]
})
export class Tasks implements OnInit {
    taskDialogVisible: boolean = false;
    tasks = signal<Task[]>([]);
    task!: Task;
    selectedTasks!: Task[] | null;
    submitted: boolean = false;

    statuses = [
        { label: 'Pending', value: 'Pending' },
        { label: 'In Progress', value: 'In Progress' },
        { label: 'Completed', value: 'Completed' }
    ];

    departments = [
        { label: 'HR', value: 'HR' },
        { label: 'Finance', value: 'Finance' },
        { label: 'IT', value: 'IT' },
        { label: 'Admin', value: 'Admin' }
    ];

    employees = [
        { label: 'John Doe', value: 'John Doe' },
        { label: 'Jane Smith', value: 'Jane Smith' },
        { label: 'Robert Brown', value: 'Robert Brown' }
    ];

    constructor(
        private taskService: TaskService,
        private messageService: MessageService,
        private confirmationService: ConfirmationService
    ) { }

    ngOnInit() {
        this.taskService.getTasks().then((data) => {
            this.tasks.set([...data]);
        });
    }

    openNewTaskDialog() {
        this.task = {
            task_id: null,
            onboarding_emp_id: null,
            task_assignee_id: null,
            department_id: '',
            description: '',
            task_name: '',
            status: '',
            due_date: new Date()
        };
        this.submitted = false;
        this.taskDialogVisible = true;
    }

    saveTask() {
        this.submitted = true;
        if (!this.task.task_name?.trim()) return;

        if (!this.task.task_id) {
            this.task.task_id = (Math.floor(Math.random() * 90000) + 10000);
            this.tasks.set([...this.tasks(), this.task]);
        }

        this.taskDialogVisible = false;
        this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Task Saved',
            life: 3000
        });
    }

    hideDialog() {
        this.taskDialogVisible = false;
    }
}

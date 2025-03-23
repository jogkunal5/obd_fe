import { Injectable } from '@angular/core';

export interface Task {
    task_id: number | null;
    onboarding_emp_id: number | null;
    task_assignee_id: number | null;
    department_id: string;
    task_name: string;
    description: string;
    status: string;
    due_date: Date;
}

@Injectable({
    providedIn: 'root'
})
export class TaskService {
    private tasks: Task[] = [
        {
            task_id: 1,
            task_name: 'Setup Email Account',
            description: 'Create and provide email credentials',
            due_date: new Date('2025-03-10'),
            status: 'Pending',
            onboarding_emp_id: 0,
            task_assignee_id: 0,
            department_id: ''
        },
        {
            task_id: 2,
            task_name: 'Submit ID Proof',
            description: 'Employee needs to submit ID proof documents',
            due_date: new Date('2025-03-12'),
            status: 'In Progress',
            onboarding_emp_id: 0,
            task_assignee_id: 0,
            department_id: ''
        },
        {
            task_id: 3,
            task_name: 'Allocate Workstation',
            description: 'Assign and configure the workstation',
            due_date: new Date('2025-03-15'),
            status: 'Completed',
            onboarding_emp_id: 0,
            task_assignee_id: 0,
            department_id: ''
        }
    ];

    constructor() { }

    getTasks(): Promise<Task[]> {
        return new Promise((resolve) => {
            setTimeout(() => resolve([...this.tasks]), 500);
        });
    }

    addTask(task: Task): Promise<void> {
        return new Promise((resolve) => {
            setTimeout(() => {
                this.tasks.push(task);
                resolve();
            }, 500);
        });
    }

    updateTask(updatedTask: Task): Promise<void> {
        return new Promise((resolve) => {
            setTimeout(() => {
                const index = this.tasks.findIndex((t) => t.task_id === updatedTask.task_id);
                if (index !== -1) {
                    this.tasks[index] = updatedTask;
                }
                resolve();
            }, 500);
        });
    }

    deleteTask(taskId: number): Promise<void> {
        return new Promise((resolve) => {
            setTimeout(() => {
                this.tasks = this.tasks.filter((task) => task.task_id !== taskId);
                resolve();
            }, 500);
        });
    }
}

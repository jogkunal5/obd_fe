import { Routes } from '@angular/router';
import { Empty } from './empty/empty';
import { Tasks } from './tasks/tasks.component';
import { Profile } from './profile/profile';
import { Help } from './help/help';
import { EmployeeListComponent } from './employee-list/employee-list.component';

export default [

    { path: 'employee-list', component: EmployeeListComponent },
    { path: 'empty', component: Empty },
    { path: 'tasks', component: Tasks },
    { path: 'profile', component: Profile },
    { path: 'help', component: Help },
    { path: '**', redirectTo: '/notfound' }
] as Routes;

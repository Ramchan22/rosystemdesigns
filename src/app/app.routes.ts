import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RomachinedetailsComponent } from './romachinedetails/romachinedetails.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { RoservicedetailsComponent } from './roservicedetails-list/add/add.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login', pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'romachinedetails',
        component: RomachinedetailsComponent
    },
    {
        path: 'employeedetails',
        component: EmployeedetailsComponent
    },
    {
        path: 'roservicedetails',
        component: RoservicedetailsComponent
    },
];

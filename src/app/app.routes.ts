import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RomachinedetailsComponent } from './romachinedetails/romachinedetails.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { RoservicedetailsComponent } from './roservicedetails-list/add/add.component';
import { CreateuserComponent } from './usercreation/createuser/createuser.component';
import { UpdateuserComponent } from './usercreation/updateuser/updateuser.component';

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
        component: UpdateuserComponent
    },
    {
        path: 'roservicedetails',
        component: RoservicedetailsComponent
    },
    {
        path: 'user/createuser',
        component: CreateuserComponent
    },
    {
        path: 'user/list',
        component: UpdateuserComponent
    },
];

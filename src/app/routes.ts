import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {HomeComponent} from './home/home.component';

export const appRoutes: Routes = [
    {
        path: 'home', component:HomeComponent

    },
    {
        path: 'login', component:LoginComponent
    },
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    }
];
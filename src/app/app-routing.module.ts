import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { IndexComponent } from './components/index/index.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { LoginGuardService } from './components/sign-in/signin-guard.service';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

const appRoutes: Routes = [
  { path: 'web', component:IndexComponent},
  { path: '', redirectTo: '/web', pathMatch: 'full' },
  { path: 'web/login', component:SignInComponent },
  { path: 'web/register', component:SignUpComponent },
  { path: 'web/admin', component:AdminDashboardComponent,
    loadChildren:()=>import("./admin-dashboard/admin.module").then(m=>m.AdminModule)
  },
  { path: 'web/manager', component:ManagerDashboardComponent },
  { path: 'web/employee', component:EmployeeDashboardComponent },
  { path: 'web/user', component:UserDashboardComponent ,canActivate:[LoginGuardService],loadChildren:()=>import("./components/index/index-routing.module").then(i=>i.IndexRoutingModule) },
  { path: 'web/user/:id', component: UserDashboardComponent },
  { path: '**', component: PagenotfoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

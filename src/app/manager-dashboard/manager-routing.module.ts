import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerDashboardComponent } from './manager-dashboard.component';
const managerRoutes: Routes = [
    {path: '',canActivate: []},
    // {path:'managercrud',loadChildren:()=>import("../manager-dashboard/manager.module").then(m=>m.ManagerModule)},
    // {path:'usercrud',loadChildren:()=>import("../user-dashboard/user.module").then(m=>m.UserModule)}
];
@NgModule({
    imports: [RouterModule.forChild(managerRoutes)],
    exports: [RouterModule]
})
export class ManagerRoutingModule { }

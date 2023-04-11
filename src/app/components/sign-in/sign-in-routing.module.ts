import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in.component';
import { LoginGuardService } from "./signin-guard.service";
const bookRoutes: Routes = [
    {
        path: '',
        component: SignInComponent,
        canActivate: [LoginGuardService]
    }
];
@NgModule({
    imports: [RouterModule.forChild(bookRoutes)],
    exports: [RouterModule]
})
export class BookRoutingModule { }

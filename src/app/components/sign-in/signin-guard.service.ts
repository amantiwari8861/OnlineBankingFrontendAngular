import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SignInService } from './sign-in.service';

@Injectable({
    providedIn: 'root'
})
export class LoginGuardService implements CanActivate {
    constructor(private loginService: SignInService, private router: Router) { }
    canActivate(): boolean {
        if (this.loginService.isUserLoggedIn()) {
            return true;
        }
        this.router.navigate(['/signin']);
        return false;
    }
}

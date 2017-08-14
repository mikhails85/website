import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LocalStorageService } from '../infrastructure/local.storage';

@Injectable()
export class AuthGuard implements CanActivate {
     
    constructor(private router: Router, private localStorageService: LocalStorageService) { }
 
    canActivate() {
        if (this.localStorageService.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
 
        // not logged in so redirect to login page
        this.router.navigate(['/login']);
        return false;
    }
}
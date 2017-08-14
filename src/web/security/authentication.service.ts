import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { LocalStorageService } from '../infrastructure/local.storage';
import 'rxjs/add/operator/map';
@Injectable()
export class AuthenticationService {
    public token: string;
 
    constructor(private http: HttpClient, private localStorageService: LocalStorageService) {
        // set token if saved in local storage
        var currentUser = this.localStorageService.getItem('currentUser');
        this.token = currentUser && currentUser.token;
    }
 
    login(username: string, password: string): Observable<boolean>  {      
        return this.http.post('/api/authenticate', JSON.stringify({ username: username, password: password }),  {
                              headers: new HttpHeaders().set('Content-Type',  'application/json' )
                            })
            .map( (response:{token:string}) => {
                // login successful if there's a jwt token in the response
                let token = response && response.token;
                if (token) {
                    // set token property
                    this.token = token;
 
                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    this.localStorageService.setItem('currentUser', { username: username, token: this.token });
 
                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            });
    }
 
    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = '';
        this.localStorageService.removeItem('currentUser');
    }
}
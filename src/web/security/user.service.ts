import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { AuthenticationService } from './authentication.service';
import { User } from './../../model/user';

@Injectable()
export class UserService {

  constructor(
        private http: HttpClient,
        private authenticationService: AuthenticationService) {}

  getUser(): Observable<User> {
     return this.http.get<User>('/api/user', {
                              headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.authenticationService.token )
                            });
  }
}


import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';
import { User } from '../@objects/user';
@Injectable()
export class AuthService {

  constructor(public http: Http) { }

  authenticateUser(user:User){
    return this.http.post(environment.apiUrl + 'authenticate',user).map(res => res.json());
  }

  register(user:User){
    return this.http.post(environment.apiUrl + 'register',user).map(res => res.json());
  }

}

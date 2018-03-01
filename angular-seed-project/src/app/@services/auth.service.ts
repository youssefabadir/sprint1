import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';
import { User } from '../@objects/user';
@Injectable()
export class AuthService {

  constructor(public http: Http) { }

  authenticateUser(user:User){
    return this.http.post(environment.apiUrl + 'user/authenticateUser',user).map(res => res.json());
  }

}

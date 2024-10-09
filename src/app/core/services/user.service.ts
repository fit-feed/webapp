import { Injectable } from '@angular/core';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public static setCurrent(user:User) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  public static getCurrent(): User {
    return JSON.parse(<string>localStorage.getItem('user'));
  }

  public static removeCurrent() {
    localStorage.removeItem('user');
  }
}

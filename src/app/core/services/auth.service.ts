import { Injectable } from '@angular/core';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
    localStorage.setItem('auth', 'false');
  }

  public static check(): boolean {
    return localStorage.getItem('auth') === 'true';
  }

  public login(): void {
    localStorage.setItem('auth', 'true');
    UserService.setCurrent({email:'e@mail.com', password:'123456'})
  }

  public static logout(): void {
    localStorage.setItem('auth', 'false');
    UserService.removeCurrent();
  }
}

import { Injectable } from '@angular/core';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public static check(): boolean {
    return localStorage.getItem('auth') === 'true';
  }

  public static login(): void {
    localStorage.setItem('auth', 'true');
    UserService.setCurrent({id: null, email:'e@mail.com', password:'123456'})
  }

  public static logout(): void {
    localStorage.setItem('auth', 'false');
    UserService.removeCurrent();
  }
}

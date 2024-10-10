import { Component } from '@angular/core';
import {UserService} from '../../core/services/user.service';
import {User} from '../../core/models/user';
import {OnInit} from '@angular/core';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css'
})
export class ProfilePageComponent implements OnInit {
  protected user: User | null = null;

  ngOnInit(): void {
    this.user = UserService.getCurrent();
  }
}

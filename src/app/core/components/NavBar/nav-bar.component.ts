import { Component } from '@angular/core';

import { UserRepositoryService } from '../../services/user-repository.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  constructor(private userRepositoryService: UserRepositoryService) {}

  get currentUser() {
    return this.userRepositoryService.currentUser;
  }

  handleSignOut() {
    this.userRepositoryService.currentUser = null;
  }
}

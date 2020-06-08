import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UserRepositoryService } from './services/user-repository.service';
import { NavBarComponent } from './components/NavBar/nav-bar.component';
import { AccountMenuComponent } from './components/AccountMenu/account-menu.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [NavBarComponent, AccountMenuComponent],
  declarations: [NavBarComponent, AccountMenuComponent],
  providers: [UserRepositoryService],
})
export class CoreModule {}

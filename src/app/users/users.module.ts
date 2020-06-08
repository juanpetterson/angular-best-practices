import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { RegisterComponent } from './register.component';
import { SignInComponent } from './sign-in.component';

const routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'sign-in', component: SignInComponent },
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [RegisterComponent, SignInComponent],
  exports: [CommonModule, RouterModule],
  providers: [],
})
export class UsersModule {}

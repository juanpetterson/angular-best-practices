import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserRepositoryService } from '../services/user-repository.service';

@Component({
  selector: 'selector-name',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.css']
})

export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  password: FormControl;
  saving = false;

  constructor(
    private router: Router,
    private userRepositoryService: UserRepositoryService
  ) { }

  ngOnInit() {
    this.firstName = new FormControl('', Validators.required);
    this.lastName = new FormControl('', Validators.required);
    this.email = new FormControl('', Validators.required);
    this.password = new FormControl('', Validators.required);

    this.registerForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
    });
  }

  registerUser(user) {
    this.saving = true;
    this.userRepositoryService.saveUser(user).subscribe(
      null,
      () => (this.saving = false),
      () => this.router.navigate(['/catalog'])
    );
  }

  cancel() {
    this.router.navigate(['/']);
  }
}


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthService } from '../shared/auth.service';

import * as Trades from '../../../assets/json/Metiers.json';
import * as Geo from '../../../assets/json/Geo.json';

import { User } from '../models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [AuthService]
})
export class SignupComponent implements OnInit {

  jobs: any = (Trades as any).default;
  data: any = (Geo as any).default;
  selectedVille: "selectedVille";
  selectedState: any;

  signupForm: FormGroup;
  model: User;
  isSubmitted = false;

  constructor(private authService: AuthService,
              private fb: FormBuilder,
              private router: Router) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      gender: ['male', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      state: ['', Validators.required],
      deleg: ['', Validators.required],
      tel: ['', Validators.required],
      metier: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      role: ['']
    });
  }

  get f(){
    return this.signupForm.controls;
  }

  setRolePro() {
    this.signupForm.patchValue({role: 'ROLE_PRO'});
  }

  setRoleParticular() {
    this.signupForm.patchValue({role: 'ROLE_USER'});
  }

  resetForm() {
    this.signupForm.reset();
  }

  onSignUp(){

    this.model = this.signupForm.value;

    this.authService.signUp(this.model)
      .subscribe(
        res => {
          if(! res.error){
            localStorage.setItem('token', res.token);
            this.isSubmitted = true;
            this.resetForm();
            this.router.navigate(['/home'])
          }
          
        },
        err => console.log(err)
      );
  }

  OnChangeVille(villeName){
     this.selectedState = this.data[villeName];
  }
}

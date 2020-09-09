import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signinForm: FormGroup;
  signinErr = false;  

  constructor(private authService: AuthService,
              private router: Router) {

      this.signinForm = new FormGroup({
        email: new FormControl(''),
        password: new FormControl(''),
     });
  }

  ngOnInit(): void {
  }

  onSignIn(){
    console.log(this.signinForm.value);
  	this.authService.signIn(this.signinForm.value)
  		.subscribe(
  			res => {
          this.signinErr = false;
  				localStorage.setItem('token', res.token);
  				this.router.navigate(['/auth/profile']);
  			},
  			err => {
          console.log(err);
          this.signinErr = true;
        }
  		)
  }

}

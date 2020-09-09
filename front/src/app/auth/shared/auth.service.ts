import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly URL = 'http://localhost:3000/users/'

  constructor(private http: HttpClient, private router: Router) { }

  signUp(user: User){
  	return this.http.post<any>(this.URL+ 'signup', user);
  }

  signIn(user){
  	return this.http.post<any>(this.URL+ 'signin', user);
  }

  loggedIn() {
  	return !!localStorage.getItem('token');
  }

  getToken(){
  	return localStorage.getItem('token');
  }
  
  logout(){
  	localStorage.removeItem('token');
  	this.router.navigate(['/home']);
  }
}

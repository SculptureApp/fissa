import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//import { User } from '../auth/models/user';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  
  readonly URL = 'http://localhost:3000/users/';

  constructor(private http: HttpClient) { }

  getProTrade(): Observable<any>{
  	return this.http.get(this.URL+ 'pro');
  }

}

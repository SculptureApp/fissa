import { Component, OnInit } from '@angular/core';
//import { Observable } from 'rxjs';
//import { filter, map } from 'rxjs/operators';

import { SharedService } from '../service/shared.service';
import * as Trades from '../../assets/json/Metiers.json';
//import { User } from '../auth/models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  trades: any = (Trades as any).default;

  constructor(private service: SharedService) { }

  ngOnInit(): void {
  }

  countPro(){
  }

}

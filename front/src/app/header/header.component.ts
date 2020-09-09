import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd} from '@angular/router';
import { filter } from 'rxjs/operators';

import { AuthService } from '../auth/shared/auth.service';
// import { SharedService } from '../service/shared.service';

import * as Geo from '../../assets/json/Geo.json';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  activeDOM: boolean = false;
  eventUrl: string;
  tradeName: string;
  
  data: any = (Geo as any).default;

  selectedVille: "selectedVille";
  selectedState: any;

  constructor(private router: Router, public authService: AuthService
              /*private route: ActivatedRoute,
              public authService: AuthService,
              private shared: SharedService*/) { 

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)  
    ).subscribe((event: NavigationEnd) => {
      this.eventUrl = event.url.replace('/', '');
      this.eventUrl = this.eventUrl.substring(0, this.eventUrl.indexOf('/'))

      this.activeDOM = this.eventUrl === 'trades' ? true : false;
    });

   }

  ngOnInit(): void {
  }

  OnChangeVille(villeName){
     this.selectedState = this.data[villeName];
  }

}

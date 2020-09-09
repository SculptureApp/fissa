import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { SharedService } from '../service/shared.service';
import { ProfilterPipe } from '../service/profilter.pipe';


@Component({
  selector: 'app-trades',
  templateUrl: './trades.component.html',
  styleUrls: ['./trades.component.css']
})
export class TradesComponent implements OnInit {

  proUser: any;
  tradeName: string;

  constructor(private shared: SharedService, 
              private route: ActivatedRoute) { }

  ngOnInit(): void {
   this.proTrades();
  }

  proTrades(){
    this.shared.getProTrade().subscribe(data => {
      this.proUser = data;
    })
  }

  receiveTrade($event){
    this.tradeName = $event;
    console.log('trade: '+this.tradeName);
  }

}

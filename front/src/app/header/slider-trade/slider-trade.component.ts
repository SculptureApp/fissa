import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { OwlOptions } from 'ngx-owl-carousel-o';
import * as Trades from '../../../assets/json/Metiers.json';

@Component({
  selector: 'app-slider-trade',
  templateUrl: './slider-trade.component.html',
  styleUrls: ['./slider-trade.component.css']
})
export class SliderTradeComponent implements OnInit {

  trades: any = (Trades as any).default;
  tradeName: string;
  
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['',''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onSearch(){
    this.route.paramMap.subscribe(params => {
        this.tradeName = params.get("name");
    });
  }

}

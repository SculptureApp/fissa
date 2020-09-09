import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

import * as Trades from '../../../assets/json/Metiers.json';

@Component({
  selector: 'app-vertical-trade',
  templateUrl: './vertical-trade.component.html',
  styleUrls: ['./vertical-trade.component.css']
})
export class VerticalTradeComponent implements OnInit {

  jobs: any = (Trades as any).default;
  tradeName: string;

  @Output() tradeEvent = new EventEmitter<string>();

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  sendUri(){
    this.route.paramMap.subscribe(params => {
        this.tradeName = params.get("name");
        console.log(this.tradeName);
        this.tradeEvent.emit(this.tradeName)
    });
  }

}

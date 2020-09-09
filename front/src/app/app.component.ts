import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  showScroll: boolean;
  trades: [];
  searchText: string;
  
  constructor() {
  }

  @HostListener("window:scroll", [])
  onWindowScroll(){
    if(window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 300){
      this.showScroll = true;
    }
    else if(this.showScroll || window.pageYOffset || 
            document.documentElement.scrollTop || document.body.scrollTop < 300 ){
           this.showScroll = false;
    }
  }

  scrollTop(){
    (function smoothscroll(){
      var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if(currentScroll > 0){
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - (currentScroll / 10));
      }
    })();
  }

  ngOnInit(){
  	this.script();
  }

  script(){

  	// :: 2.1 Search Active Code
    var amadoSearch = $('.search-nav');
    var searchClose = $('.search-close');

    amadoSearch.on('click', function () {
        $('body').toggleClass('search-wrapper-on');
    });

    searchClose.on('click', function () {
        $('body').removeClass('search-wrapper-on');
    });

    // :: 2.2 Mobile Nav Active Code
    var amadoMobNav = $('.amado-navbar-toggler');
    var navClose = $('.nav-close');

    amadoMobNav.on('click', function () {
        $('.header-area').toggleClass('bp-xs-on');
    });

    navClose.on('click', function () {
        $('.header-area').removeClass('bp-xs-on');
    });
  }

}

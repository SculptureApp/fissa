import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { TradesComponent } from './trades/trades.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AuthGuard } from './auth/shared/auth.guard';
import { TokenInterceptorService } from './auth/shared/token-interceptor.service';

//import { searchFilterPipe } from './service/trade.pipe';
import { ProfilterPipe } from './service/profilter.pipe';
import { VerticalTradeComponent } from './header/vertical-trade/vertical-trade.component';
import { SliderTradeComponent } from './header/slider-trade/slider-trade.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NewsletterComponent,
    PageNotFoundComponent,
    TradesComponent,
    //searchFilterPipe,
    ProfilterPipe,
    VerticalTradeComponent,
    SliderTradeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CarouselModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule
  ],
  providers: [
    //searchFilterPipe,
    ProfilterPipe,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

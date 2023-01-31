import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AccountsComponent} from '../components/accounts/accounts.component';
import { GenderPipe } from '../pipes/gender.pipe'
import {  OfferPipe } from '../pipes/offer.pipe'
@NgModule({
  declarations: [
    AppComponent, AccountsComponent, GenderPipe, OfferPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

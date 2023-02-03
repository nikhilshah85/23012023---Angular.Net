import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { NewsComponent } from './components/news/news.component';
import { CareersComponent } from './components/careers/careers.component';
import { LoginComponent } from './components/login/login.component';
import { AsiaComponent } from './components/contact/locations/asia/asia.component';
import { EuropeComponent } from './components/contact/locations/europe/europe.component';
import { USAComponent } from './components/contact/locations/usa/usa.component';
import { ArabComponent } from './components/contact/locations/arab/arab.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NewsComponent,
    CareersComponent,
    LoginComponent,
    AsiaComponent,
    EuropeComponent,
    USAComponent,
    ArabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

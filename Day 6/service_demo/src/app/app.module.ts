import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CompAComponent } from './components/comp-a/comp-a.component';
import { CompBComponent } from './components/comp-b/comp-b.component';
import { CompCComponent } from './components/comp-c/comp-c.component';
import { CompDComponent } from './components/comp-d/comp-d.component';
import { ColddrinksComponent } from './components/colddrinks/colddrinks.component';
import { ClothsComponent } from './components/cloths/cloths.component';

@NgModule({
  declarations: [
    AppComponent,
    CompAComponent,
    CompBComponent,
    CompCComponent,
    CompDComponent,
    ColddrinksComponent,
    ClothsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

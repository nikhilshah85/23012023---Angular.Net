import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StocksComponent } from './components/stocks/stocks.component';
import { TotalInvestmentPipe } from './pipes/total-investment.pipe';
import { CurrentInvestmentValuePipe } from './pipes/current-investment-value.pipe';
import { StockStatusPipe } from './pipes/stock-status.pipe';
import { PortfolioPipe } from './pipes/portfolio.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StocksComponent,
    TotalInvestmentPipe,
    CurrentInvestmentValuePipe,
    StockStatusPipe,
    PortfolioPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

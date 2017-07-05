import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonComponent } from './ui-component/button/button.component';
import { GraphComponent } from './graph/graph.component';
import { TradeAccountsComponent } from './trade-accounts/trade-accounts.component';

import { AccountsService } from './service/accounts/accounts.service';
import { RandomColorsService } from './service/random-colors/random-colors.service';
import { NavItemComponent } from './shared/component/nav-item/nav-item.component';
import { TradeComponent } from './header/component/trade/trade.component';
import { TransferComponent } from './header/component/transfer/transfer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
    GraphComponent,
    TradeAccountsComponent,
    NavItemComponent,
    TradeComponent,
    TransferComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2GoogleChartsModule
  ],
  bootstrap: [AppComponent],
  providers:[{ provide: 'accountsService', useClass: AccountsService }, RandomColorsService]
})
export class AppModule { }

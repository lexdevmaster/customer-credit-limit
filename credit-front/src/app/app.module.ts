import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { CustomerCreditLimitAddComponent } from './customer-credit-limit-add/customer-credit-limit-add.component';
import { CustomerCreditLimitListComponent } from './customer-credit-limit-list/customer-credit-limit-list.component';
import { CustomerCreditLimitService } from './customer-credit-limit.service';


@NgModule({
  declarations: [
    AppComponent,
    CustomerCreditLimitAddComponent,
    CustomerCreditLimitListComponent 
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [CustomerCreditLimitService],
  bootstrap: [AppComponent]
})
export class AppModule { }

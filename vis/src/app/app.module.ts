import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {ButtonModule} from 'primeng/button';
import { BillingComponent } from './billing/billing.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { BillhistoryComponent } from './billhistory/billhistory.component';
import{RouterModule,Routes}from'@angular/router';
import { LoginformComponent } from './loginform/loginform.component';
import { FooterComponent } from './footer/footer.component';
import {SplitButtonModule} from 'primeng/splitbutton';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BillingComponent,
    AddproductComponent,
    BillhistoryComponent,
    LoginformComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    SplitButtonModule,
    RouterModule.forRoot([
{path:'billing',component:BillingComponent},
{path:'billhistory',component:BillhistoryComponent},
{path:'addproduct',component:AddproductComponent}

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule 
{ 
}



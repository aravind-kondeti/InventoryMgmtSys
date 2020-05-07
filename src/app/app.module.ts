import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PurchasereportComponent } from './purchasereport/purchasereport.component';
import { SalesreportComponent } from './salesreport/salesreport.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AddInvTxnComponentComponent } from './add-inv-txn-component/add-inv-txn-component.component';
import { PurchaseProductComponentComponent } from './purchase-product-component/purchase-product-component.component';
import { PurchasereportdownloadComponent } from './purchasereportdownload/purchasereportdownload.component';
import { SalesProductComponent } from './sales-product/sales-product.component';
import { SalesreportdownloadComponent } from './salesreportdownload/salesreportdownload.component';
import { VendorTxnComponent } from './vendor-txn/vendor-txn.component';
import { ViewReportdtComponent } from './view-reportdt/view-reportdt.component';
import { ViewallVendorsComponent } from './viewall-vendors/viewall-vendors.component';
import { ViewstockComponent } from './viewstock/viewstock.component';
import { OrderbyPipe } from './orderby-pipe';
import { SortByPipe } from './sort-by-pipe';



@NgModule({
  declarations: [
    AppComponent,
    PurchasereportComponent,
    SalesreportComponent,
    ErrorPageComponent,
    AddInvTxnComponentComponent,
    PurchaseProductComponentComponent,
    PurchasereportdownloadComponent,
    SalesProductComponent,
    SalesreportdownloadComponent,
    VendorTxnComponent,
    ViewReportdtComponent,
    ViewallVendorsComponent,
    ViewstockComponent,
    OrderbyPipe,
    SortByPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

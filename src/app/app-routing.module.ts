import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesreportComponent } from './salesreport/salesreport.component';
import { PurchasereportComponent } from './purchasereport/purchasereport.component';
import { CgguardService } from './cgguard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ViewstockComponent } from './viewstock/viewstock.component';
import { SalesProductComponent } from './sales-product/sales-product.component';
import { PurchaseProductComponentComponent } from './purchase-product-component/purchase-product-component.component';
import { ViewReportdtComponent } from './view-reportdt/view-reportdt.component';
import { ViewallVendorsComponent } from './viewall-vendors/viewall-vendors.component';
import { VendorTxnComponent } from './vendor-txn/vendor-txn.component';
import { SalesreportdownloadComponent } from './salesreportdownload/salesreportdownload.component';
import { PurchasereportdownloadComponent } from './purchasereportdownload/purchasereportdownload.component';
import { AddInvTxnComponentComponent } from './add-inv-txn-component/add-inv-txn-component.component';




const routes: Routes = [
  {path:'viewProducts', component:ViewstockComponent,canActivate:[CgguardService],data:{role:"any"}},
  {path:'viewProducts/SalesProduct/:pid', component:SalesProductComponent,canActivate:[CgguardService],data:{role:"any"}},
  {path:'viewProducts/PurchaseProduct/:pid', component:PurchaseProductComponentComponent,canActivate:[CgguardService],data:{role:"any"}},
  {path:'ViewReportDt', component:ViewReportdtComponent,canActivate:[CgguardService],data:{role:"admin"}},

  {path:'viewVendors', component:ViewallVendorsComponent,canActivate:[CgguardService],data:{role:"admin"}},
  {path:'viewVendors/vendorTxns/:vendorid', component:VendorTxnComponent,canActivate:[CgguardService],data:{role:"admin"}},
  {path: 'addInvTxn', component:AddInvTxnComponentComponent,canActivate:[CgguardService],data:{role:"any"}},
  {path:'salesReport', component:SalesreportComponent,canActivate:[CgguardService],data:{role:"admin"}},
  {path:'purchaseReport', component:PurchasereportComponent,canActivate:[CgguardService],data:{role:"admin"}},
  {path:'error',component:ErrorPageComponent},
  {path:'salesReport/DownloadSalesReport',component:SalesreportdownloadComponent,canActivate:[CgguardService],data:{role:"admin"}},
  {path:'purchaseReport/DownloadPurchaseReport',component:PurchasereportdownloadComponent,canActivate:[CgguardService],data:{role:"admin"}}
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

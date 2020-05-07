import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private http:HttpClient) { }

  public viewSalesReportByProduct(prodId:string):Observable<any> {
    let utoken=localStorage.getItem("token");
    if(utoken==null)utoken="";
    const httpHeaders=new HttpHeaders({"userId":utoken});
    return this.http.get("http://localhost:8082/InventoryManagementSpringBoot/salesreport/" +prodId);
  }

  public viewPurchaseReportByProduct(prodId:string):Observable<any> {
    let utoken=localStorage.getItem("token");
    if(utoken==null)utoken="";
    const httpHeaders=new HttpHeaders({"userId":utoken});
    return this.http.get("http://localhost:8082/InventoryManagementSpringBoot/purchasereport/" +prodId);
  }
  public viewSalesReportByDt(fromDt:string, toDt:string):Observable<any>{
    let utoken=localStorage.getItem("token");
    if(utoken==null)utoken="";
    const httpHeaders=new HttpHeaders({"userId":utoken});
          return this.http.get("http://localhost:8082/InventoryManagementSpringBoot/salesreportdate/" +fromDt+"/"+toDt);

   }
  public viewPurchaseReportByDt(fromDt:string, toDt:string):Observable<any>{
    let utoken=localStorage.getItem("token");
    if(utoken==null)utoken="";
    const httpHeaders=new HttpHeaders({"userId":utoken});
          return this.http.get("http://localhost:8082/InventoryManagementSpringBoot/purchasereportdate/" + fromDt+"/"+toDt);

}
}


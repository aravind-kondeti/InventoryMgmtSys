import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryTxnService {

  constructor(private http:HttpClient) { }

  public viewTxnofSpecVendor(vendorId: string):Observable<any> {
    let utoken=localStorage.getItem("token");
    if(utoken==null)utoken="";
    const httpHeaders=new HttpHeaders({"userId":utoken});
    return this.http.get("http://localhost:8082/InventoryManagementSpringBoot/txnofvendor/"+vendorId);
  }

}

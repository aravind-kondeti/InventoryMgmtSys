import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  constructor(private http:HttpClient) { }

  public viewAllVendors() {
    let utoken=localStorage.getItem("token");
    if(utoken==null)utoken="";
    const httpHeaders=new HttpHeaders({"userId":utoken});
    return this.http.get("http://localhost:8082/InventoryManagementSpringBoot/viewallVendors");
  }
}

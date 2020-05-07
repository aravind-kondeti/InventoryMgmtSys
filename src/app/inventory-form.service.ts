import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InventoryForm } from './inventory-form';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryFormService {

  constructor(private http:HttpClient) { }

  public addInvendtoryTxn(txn: InventoryForm) :Observable<any>{
    let utoken=localStorage.getItem("token");
    if(utoken==null)utoken="";
    const httpHeaders=new HttpHeaders({"userId":utoken});
    return this.http.post("http://localhost:8082/InventoryManagementSpringBoot/addinventorytxn",txn);
  }
}
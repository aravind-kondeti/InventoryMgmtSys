import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalesandpurchaseService {

  userName:string;
  constructor(private http:HttpClient) { }

  public getSalesReport(){
    let utoken=localStorage.getItem("token");
    if(utoken==null)utoken="";
    const httpHeaders=new HttpHeaders({"userId":utoken});
    return this.http.get("http://localhost:8082/InventoryManagementSpringBoot/viewsalesreport");
  }

  public getPurchaseReport(){
    let utoken=localStorage.getItem("token");
    if(utoken==null)utoken="";
    const httpHeaders=new HttpHeaders({"userId":utoken});
    return this.http.get("http://localhost:8082/InventoryManagementSpringBoot/viewpurchasereport");
  }

  decrypt(token:string){
    let str="";
    for(let con =0; con < token.length; ++con){
         str=str+String.fromCharCode(token.charCodeAt(con)-3);
    }
         console.log(str);
         return str;
  }

  public doLogin(userid:string,password:string):Observable<any>{
     let postData=new FormData();
     postData.append('userid',userid);
     postData.append('password',password);
     return this.http.post("http://localhost:8082/InventoryManagementSpringBoot/login",postData,{responseType:'text'});
  }

  public doLogout(){
    let utoken=localStorage.getItem("token");
    if(utoken==null)utoken="";
    const httpHeaders=new HttpHeaders({"userid":utoken});
    return this.http.get("http://localhost:8082/InventoryManagementSpringBoot/logout",{headers:httpHeaders,responseType:'text'});
  }

  public download():Observable<any>{
    let utoken=localStorage.getItem("token");
    if(utoken==null)utoken="";
    const httpHeaders=new HttpHeaders({"userId":utoken});
    return this.http.get("http://localhost:8082/InventoryManagementSpringBoot/viewpdfforsales",{responseType:'blob' as'json'});
  }

  public downloadforpurchase():Observable<any>{
    let utoken=localStorage.getItem("token");
    if(utoken==null)utoken="";
    const httpHeaders=new HttpHeaders({"userId":utoken});
    return this.http.get("http://localhost:8082/InventoryManagementSpringBoot/viewpdfforpurchase",{responseType:'blob' as'json'});
  }

}

import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { SalesandpurchaseService } from './salesandpurchase.service';

@Injectable({
  providedIn: 'root'
})
export class CgguardService implements CanActivate{
  path: import("@angular/router").ActivatedRouteSnapshot[];
  route: import("@angular/router").ActivatedRouteSnapshot;

  constructor(private router:Router,private txnser:SalesandpurchaseService){}
  canActivate(route:import("@angular/router").ActivatedRouteSnapshot,
   state: import("@angular/router").RouterStateSnapshot):boolean|
   import ("@angular/router").UrlTree|import("rxjs").Observable<boolean
   |import("@angular/router").UrlTree>|Promise<boolean
   |import("@angular/router").UrlTree>
   {
       let token=localStorage.getItem("token");
       if(localStorage.getItem("token")!=null){
           let arr=token.split("-");
           let userName=this.txnser.decrypt(arr[1]);
           let role=this.txnser.decrypt(arr[2]);
           console.log(route.data)
           if(route.data.role==undefined) return true;
           if(route.data.role!=undefined&&role!=null&&route.data.role==role || route.data.role=='any'){
               return true;
           }
       }
       this.router.navigateByUrl("error");
       return false;
   }
  }
  

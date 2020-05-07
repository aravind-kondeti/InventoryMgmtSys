import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SalesandpurchaseService } from './salesandpurchase.service';
import { Login } from './login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to Inventory Management System';
  token:string=localStorage.getItem("token");
  msg:string;
  errorMsg:string;
  tokenflag:boolean=false;
  login:Login=new Login();
  constructor(private txnser:SalesandpurchaseService,private router:Router){
    console.log("clicked");

  }

  showLogin(){
    this.tokenflag=true;
  }
  hideLogin(){
    this.tokenflag=false;
  }
  

  doLogin(){
    this.txnser.doLogin(this.login.uname,this.login.pwd).subscribe(data=>{localStorage.setItem("token",data);
      let arr=data.split('-');
    this.tokenflag=false;
    this.token=localStorage.getItem("token");
    this.txnser.userName=this.txnser.decrypt(arr[1]);
    },
    error=>{console.log(error);this.errorMsg=JSON.parse(error.error).message});
    
  }
  logout():void{
    this.txnser.doLogout().subscribe(data=>{console.log(data);
    localStorage.removeItem("token");
    alert("You have logged out");
    this.tokenflag=true;
    this.token=undefined;
    

    });
  }
}

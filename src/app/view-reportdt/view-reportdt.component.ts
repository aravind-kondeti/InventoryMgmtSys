import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-view-reportdt',
  templateUrl: './view-reportdt.component.html',
  styleUrls: ['./view-reportdt.component.css']
})
export class ViewReportdtComponent implements OnInit {

  fromDt:string;
  toDt:string;
  rtype:string;
  errorMsg:string;
  txns:any=[];
  showFormFlag=true;
  showTableFlag=false;
  field:string;
  message: any;
 
  constructor(private service:InventoryService){}

bindOrder(column){
   this.field=column;
}
  
  ngOnInit() {
    
}
 
  processReport(){
        this.errorMsg='';
         switch(this.rtype){
             
          case "0":
                    this.service.viewSalesReportByDt(this.fromDt, this.toDt).subscribe(data=>{
                                                      this.showTableFlag=true;this.showFormFlag=false;
                                                      this.txns=data},
                                                      error=>{this.errorMsg=error.error.message;
                                                                 this.showTableFlag=false; this.showFormFlag=true;})
   
                    break;
             
          case "1":
                    this.service.viewPurchaseReportByDt(this.fromDt, this.toDt).subscribe(data=>{
                                                      this.showTableFlag=true;this.showFormFlag=false;
                                                      this.txns=data},
                                                      error=>{this.errorMsg=error.error.message;
                                                                 this.showTableFlag=false; this.showFormFlag=true;})
   
                    break;
             default:
                 this.errorMsg="Please select the report type";
        }

  }
}
  


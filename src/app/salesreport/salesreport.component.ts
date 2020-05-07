import { Component, OnInit } from '@angular/core';
import { SalesandpurchaseService } from '../salesandpurchase.service';

@Component({
  selector: 'app-salesreport',
  templateUrl: './salesreport.component.html',
  styleUrls: ['./salesreport.component.css']
})
export class SalesreportComponent implements OnInit {

  message: any;
  SalesandpurchaseService: any;


  constructor(private service:SalesandpurchaseService) { }
  field:string;
  bindOrder(column){
     this.field=column;
  }
    txns:any= [];
    ngOnInit() {
         this.service.getSalesReport().subscribe(data=>this.txns=data,
                                  error=>this.message=error.error.message);
    }

}

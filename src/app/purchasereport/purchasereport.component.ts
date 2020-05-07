import { Component, OnInit } from '@angular/core';
import { SalesandpurchaseService } from '../salesandpurchase.service';

@Component({
  selector: 'app-purchasereport',
  templateUrl: './purchasereport.component.html',
  styleUrls: ['./purchasereport.component.css']
})
export class PurchasereportComponent implements OnInit {

  message: any;

  constructor(private service:SalesandpurchaseService) { }
field:string;
bindOrder(column){
   this.field=column;
}
  txns:any= [];
  ngOnInit() {
       this.service.getPurchaseReport().subscribe(data=>this.txns=data,
                                error=>this.message=error.error.message);
  }

}

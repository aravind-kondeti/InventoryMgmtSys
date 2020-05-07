import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../inventory.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sales-product',
  templateUrl: './sales-product.component.html',
  styleUrls: ['./sales-product.component.css']
})
export class SalesProductComponent implements OnInit {

  message: any;

  constructor(private service:InventoryService, private route:ActivatedRoute) { }
field:string;

bindOrder(column){
   this.field=column;
}
  txns:any= []; 
  ngOnInit() {
             this.route.paramMap.subscribe(params=>{let productId= params.get('pid');
       this.service.viewSalesReportByProduct(productId).subscribe(data=>this.txns=data,
                                error=>this.message=error.error.message);
    });
  }
}

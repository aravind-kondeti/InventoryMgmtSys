import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../inventory.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-purchase-product-component',
  templateUrl: './purchase-product-component.component.html',
  styleUrls: ['./purchase-product-component.component.css']
})
export class PurchaseProductComponentComponent implements OnInit {

  message: any;

  constructor(private service:InventoryService, private route:ActivatedRoute) { }
field:string;
bindOrder(column){
   this.field=column;
}
  txns:any= [];
  ngOnInit() {
      this.route.paramMap.subscribe(params=>{let productId= params.get('pid');
 this.service.viewPurchaseReportByProduct(productId).subscribe(data=> {this.txns=data; console.log(this.txns)},
                                error=>this.message=error.error.message);
  });  
}
}


import { Component, OnInit } from '@angular/core';
import { InventoryTxnService } from '../inventory-txn.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vendor-txn',
  templateUrl: './vendor-txn.component.html',
  styleUrls: ['./vendor-txn.component.css']
})
export class VendorTxnComponent implements OnInit {

  vendorTxns:any;
  
  constructor(private service:InventoryTxnService, private route:ActivatedRoute) { }

  ngOnInit() {
     this.route.paramMap.subscribe(params=> {let vendorId= params.get('vendorid');
     this.service.viewTxnofSpecVendor(vendorId).subscribe((data)=>this.vendorTxns = data)});
    }
  

}

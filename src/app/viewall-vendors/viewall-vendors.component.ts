import { Component, OnInit } from '@angular/core';
import { Vendor } from '../vendor';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-viewall-vendors',
  templateUrl: './viewall-vendors.component.html',
  styleUrls: ['./viewall-vendors.component.css']
})
export class ViewallVendorsComponent implements OnInit {

  vendors:any;
  ven:Vendor = new Vendor();
  field:string;
   bindOrder(column){
     this.field= column;
   }
  constructor(private service:VendorService) { }

  ngOnInit() {
    this.service.viewAllVendors().subscribe((data)=>this.vendors = data);
  }
}


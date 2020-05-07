import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-viewstock',
  templateUrl: './viewstock.component.html',
  styleUrls: ['./viewstock.component.css']
})
export class ViewstockComponent implements OnInit {

  products:any;
  prod:Product = new Product(); 
  field:string; 
  constructor(private service:ProductService) { }

  ngOnInit() {
    this.service.viewStock().subscribe((data)=>this.products = data); 
  }
  bindOrder(column:string){
       this.field=column;
  }
 
}


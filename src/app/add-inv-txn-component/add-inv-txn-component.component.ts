import { Component, OnInit, ViewChild } from '@angular/core';
import { InventoryForm } from '../inventory-form';
import { NgForm } from '@angular/forms';
import { InventoryFormService } from '../inventory-form.service';

@Component({
  selector: 'app-add-inv-txn-component',
  templateUrl: './add-inv-txn-component.component.html',
  styleUrls: ['./add-inv-txn-component.component.css']
})
export class AddInvTxnComponentComponent implements OnInit {

  txn:InventoryForm = new InventoryForm();
  message:any;
  @ViewChild('frm')
  form:NgForm;
  flag:boolean=false;
  constructor(private service:InventoryFormService) { }

  ngOnInit() {
  }

  addTxn() {
    let resp3 = this.service.addInvendtoryTxn(this.txn);
    resp3.subscribe((data)=>{this.message = data.message;console.log(data); this.form.resetForm()},
          error=>{console.log(error);this.message=error.error.message});
          this.flag=true;
  }

  goback(){
    this.flag=false;
  }

}


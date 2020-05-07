import { Component, OnInit } from '@angular/core';
import { SalesandpurchaseService } from '../salesandpurchase.service';

@Component({
  selector: 'app-purchasereportdownload',
  templateUrl: './purchasereportdownload.component.html',
  styleUrls: ['./purchasereportdownload.component.css']
})
export class PurchasereportdownloadComponent implements OnInit {

  SalesandpurchaseService: any;

  constructor(private service:SalesandpurchaseService) { }

  ngOnInit() {
  }

  downloadPurchase(){
    this.service.downloadforpurchase().subscribe(data=>{ let blob = new Blob([data], {type: 'application/pdf'});

    var downloadURL = window.URL.createObjectURL(data);
    var link = document.createElement('a');
    link.href = downloadURL;
    link.download = "report.pdf";
    link.click();}
);
}



}


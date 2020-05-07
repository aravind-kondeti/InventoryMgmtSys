import { Component, OnInit } from '@angular/core';
import { SalesandpurchaseService } from '../salesandpurchase.service';

@Component({
  selector: 'app-salesreportdownload',
  templateUrl: './salesreportdownload.component.html',
  styleUrls: ['./salesreportdownload.component.css']
})
export class SalesreportdownloadComponent implements OnInit {

  SalesandpurchaseService: any;

  constructor(private service:SalesandpurchaseService) { }

  ngOnInit() {
  }

  download(){
    this.service.download().subscribe(data=>{ let blob = new Blob([data], {type: 'application/pdf'});

    var downloadURL = window.URL.createObjectURL(data);
    var link = document.createElement('a');
    link.href = downloadURL;
    link.download = "report.pdf";
    link.click();}
);
}


}


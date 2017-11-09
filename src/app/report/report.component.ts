import { Component, OnInit } from '@angular/core';

class Report {
  report: string[];
  constructor(data: string[]){
    this.report = data;
  }
  run(){
    this.report.forEach(function(item){
      console.log(item);
    })
  }
}

class TableReport extends Report{   // 继承
  tableReport: number[];
  constructor(data: string[], data2: number[]){
    super(data);
    this.tableReport = data2;
  }
  run(){
    this.tableReport.forEach(function(item){
      console.log(item);
    });
    super.run();
  }
}

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})

export class ReportComponent implements OnInit {

  constructor() {
    let report: string[]=['page0', 'page1', 'page2'];
    let tableReport: number[]=[1,2,3,4,5];
    let tableReportInstance = new TableReport(report, tableReport);
    tableReportInstance.run();
  }

  ngOnInit() {
  }

}

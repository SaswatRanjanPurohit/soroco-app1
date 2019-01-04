import { Component, OnInit } from '@angular/core';
import { chart } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales : {
      yAxes: [{
        ticks: {
          max : 60,
          min : 0,
          display: false
        },gridLines:[{
          display: false
        }]
      }],
      xAxes: [{
        ticks: {
          fontSize:16
        },
      gridLines:[{
          display: false
        }]
      }]
    }
  };
  public barChartLabels:string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = false;

  public barChartData:any[] = [
    {data: [15, 20, 40, 40, 56, 55, 40, 40, 40, 56, 60]}


  ];
  colors = [
    {
      backgroundColor: '#4fc3f7'
    }
   ];
option = [
  {
    'scaleShowLabels': false,
  },
];






  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  public randomize():void {

    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;

  }

  constructor() { }

  ngOnInit() {
  }

}

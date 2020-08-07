import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-userdatagraph',
  templateUrl: './userdatagraph.component.html',
  styleUrls: ['./userdatagraph.component.scss']
})
export class UserdatagraphComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  title = 'myHighchart';

  data = [{
          name: 'Productivity',
          data: [1, 5, 3, 2, 4, 2],
          color: "#e9e46e",
       },{
          name: 'Wellness',
          data: [5, 3, 3, 3, 2, 1],
          color: "#2f2587"
       },{
          name: 'Overall Day',
          data: [3, 3, 1, 5, 4, 4],
          color: "#b3387a",
      }];

  highcharts = Highcharts;

  chartOptions = {   
    chart: {
       type: "line"
    },
    title: {
       text: ""
    },
    xAxis:{
       categories:["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",]
    },
    yAxis: {          
       title:{
          text:"Rating"
       } 
    },
    series: this.data
  };
}

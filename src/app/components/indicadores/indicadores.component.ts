import { Component, OnInit, AfterViewInit, ElementRef, ViewChild} from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from '../../models/globals.model';
import { IndicadoresAction } from 'src/app/main-nav/main-nav.actions';

import { Chart } from 'chart.js';

@Component({
  selector: 'indicadores',
  templateUrl: './indicadores.component.html',
  styleUrls: ['./indicadores.component.css']
})
export class IndicadoresComponent implements OnInit, AfterViewInit {

  @ViewChild('canvasBars', { static : true} ) canvasBars : ElementRef;
  @ViewChild('canvasLines', { static : true} ) canvasLines : ElementRef;

  @ViewChild('canvasBars2', { static : true} ) canvasBars2 : ElementRef;
  @ViewChild('canvasLines2', { static : true} ) canvasLines2 : ElementRef;

  // title = "app";
  chartBars = [];
  chartLines = [];

  chartBars2 = [];
  chartLines2 = [];

  constructor( private store: Store<AppState> ) { }

  ngOnInit() {
    const accion = new IndicadoresAction('Indicadores de Gestión');
    this.store.dispatch(accion);
  }

  ngAfterViewInit(){

    var ctxBars = this.canvasBars.nativeElement.getContext('2d');
    var ctxLines = this.canvasLines.nativeElement.getContext('2d');

    var ctxBars2 = this.canvasBars2.nativeElement.getContext('2d');
    var ctxLines2 = this.canvasLines2.nativeElement.getContext('2d');

    // var ctx = canvas.getContext("2d");
    // var ctx = 'myChart';
    
    // console.log("Indicadores Chart!!!!", ctx); 

    var options = {
      scales:{
        yAxes:[{
          ticks:{
            beginAtZero: true
          }
        }]
      },
      layout: {
        padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        }
      },
      legend: {
        display: false
      } 
    }

    var data = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "#E57373",
                borderColor: "rgba(75,192,192,1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [10, 20, 30, 40, 80, 60, 40],
                spanGaps: false,
            }]
        };

    setTimeout(()=>{
      this.chartBars = new Chart(ctxBars, {
        type: 'bar',
        data: data,
        options: options
      });
      this.chartLines = new Chart(ctxLines, {
        type: 'line',
        data: data,
        options: options
      });

      this.chartBars2 = new Chart(ctxBars2, {
        type: 'bar',
        data: data,
        options: options
      });
      this.chartLines2 = new Chart(ctxLines2, {
        type: 'line',
        data: data,
        options: options
      });
    });
      
 


  }

}

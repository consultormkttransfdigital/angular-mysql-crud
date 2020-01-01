import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, NgZone} from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from '../../models/globals.model';
import { IndicadoresAction } from 'src/app/main-nav/main-nav.actions';

import { Chart } from 'chart.js';
import { ScrollDispatcher, CdkScrollable } from '@angular/cdk/overlay';
import { Router } from '@angular/router';

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

  @ViewChild('container', { static : true} ) container : ElementRef;
  @ViewChild('fabInner', { static : true} ) fabInner : ElementRef;

  // title = "app";
  chartBars = [];
  chartLines = [];

  chartBars2 = [];
  chartLines2 = [];

  windowScrolled: boolean;

  constructor( private store: Store<AppState> ,
               private scrollDispatcher: ScrollDispatcher,
               private zone: NgZone,
               private route: Router ) {

  }

  ngOnInit() {
    const accion = new IndicadoresAction('Indicadores de Gestión');
    this.store.dispatch(accion);
    this.windowScrolled = false;
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


      


      this.scrollDispatcher.scrolled().
        subscribe((cdk: CdkScrollable) => {

          console.log("Evento Disparado!!!");
          console.log(this.fabInner.nativeElement);
          console.log(cdk.measureScrollOffset("top"));

          if (cdk.measureScrollOffset("top") > 0 ) {
            this.windowScrolled = true;
          } else
            this.windowScrolled = false;

          this.zone.run(()=>{
            
          });
        }); 

    });
      
 


  }

  
  
  irArriba() {
/*     this.scrollDispatcher.scrolled().subscribe((cdk: CdkScrollable) => {
      //cdk.scrollTo(-100);
    });
 */
    console.log("irArriba!");
    // this.container.nativeElement.scrollTo(0,0);
    this.route.navigate(['indicadores']);
  }


  scrollToTop() {
    console.log("scrollToTop!");
    (function smoothscroll() {
        var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
        console.log("currentScroll", currentScroll);

/*         if (currentScroll > 0) {
            window.requestAnimationFrame(smoothscroll);
            // window.scrollTo(0, currentScroll - (currentScroll / 8));
            window.scrollTo(0, 0);
        } */
        
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, 0);

    })();
}




}

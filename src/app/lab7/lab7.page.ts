import {  AfterViewInit, ChangeDetectorRef, Component, ElementRef, ViewChild  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MyHeaderComponent } from './../my-header/my-header.component';
import { RecursionService } from './service/recursion/recursion.service';
import { SeriesService } from './service/series/series.service';
import { TabService } from './service/tab/tab.service';
import { Chart, registerables } from 'chart.js';
@Component({
  selector: 'app-lab7',
  templateUrl: './lab7.page.html',
  styleUrls: ['./lab7.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, MyHeaderComponent ]
})
export class Lab7Page implements AfterViewInit {
  @ViewChild('myChart')
  myChartElement!: ElementRef;

  constructor(
    private tabService: TabService,
    private seriesService: SeriesService,
    private recursionService: RecursionService,
    private cdr: ChangeDetectorRef,
  ) { 
    Chart.register(...registerables);
  }

  show: boolean = false;
  xyTab = new Map();
  xySeries = new Map();
  xyRecursion = new Map();
  xyInput = new Map();

  canvas: any;
  ctx: any;

  input(){
      this.xyTab.forEach((value, key, map)=>{
      let s='';
      let y:number = 0;
      y=value;
      s=y.toFixed(4)+" ";
      y=this.xySeries.get(key);
      s=s+y.toFixed(4);
      y=this.xyRecursion.get(key);
      s=s+" "+y.toFixed(4);
      let x=key;
      this.xyInput.set(x.toFixed(2),s);
    })
  };

  ngAfterViewInit() {
  }

  calculate(xn: any, xk: any, h: any) {
    let xn1 = parseFloat(xn),
    xk1 = parseFloat(xk),
    h1 = parseFloat(h);
    console.log("Табулювання");
    this.xyTab = this.tabService.getTab(xn1, xk1, h1);
    console.log("Ряд");
    this.xySeries = this.seriesService.getTab(xn1, xk1, h1);
    console.log("Рекурсія");
    this.xyRecursion = this.recursionService.getTab(xn1, xk1, h1);
    
    this.show = true;

    this.cdr.detectChanges();

    setTimeout(() => this.plotCharts(), 0);

    this.input();

  }

  plotCharts() {
    const ctx = this.myChartElement.nativeElement.getContext('2d');
   
    const xValues = Array.from(this.xyTab.keys());
    const yTabValues = Array.from(this.xyTab.values());
    const ySeriesValues = Array.from(this.xySeries.values());
    const yRecursionValues = Array.from(this.xyRecursion.values());

    
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: xValues,
        datasets: [
          {
            label: 'Tabulation',
            data: yTabValues,
            borderColor: 'red',
            fill: false,
          },
          {
            label: 'Series',
            data: ySeriesValues,
            borderColor: 'blue',
            fill: false,
          },
          {
            label: 'Recursion',
            data: yRecursionValues,
            borderColor: 'green',
            fill: false,
          },
        ],
      },
      options: {
        scales: {
          x: {
            type: 'linear',
            position: 'bottom',
          },
          y: {
            min: -1,
          },
        },
      },
    });
  }

}

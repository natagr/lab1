import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, ExploreContainerComponent],
})
export class Tab3Page {
 
  a: number[][] = [];
  n: number = 0;
  maxVal: number = Number.MIN_SAFE_INTEGER;
  minVal: number = Number.MAX_SAFE_INTEGER;

  constructor() { }

  
  arrayNas(n: any): void {
    try {
      this.n = parseInt(n);
  
      if (isNaN(this.n) === true) {
        throw new Error('Parameter is not a number');
      }
  
      if (this.n < 0) {
        throw new Error('Parameter less than zero');
      }
  
      
      this.maxVal = Number.MIN_SAFE_INTEGER;
      this.minVal = Number.MAX_SAFE_INTEGER;
  
      this.a = Array(this.n);
  
      for (let i = 0; i < this.n; i++) {
        this.a[i] = Array(this.n);
  
        for (let j = 0; j < this.n; j++) {
          let aa: number = Math.random() * 100; 
          this.a[i][j] = parseFloat(aa.toFixed(2));
  
          if(this.a[i][j] > this.maxVal) {
            this.maxVal = this.a[i][j];
          }
          if(this.a[i][j] < this.minVal) {
            this.minVal = this.a[i][j];
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  
  getColor(b: number): string {
    if (b === this.maxVal) {
      return '#90EE90'; 
    } else if (b === this.minVal) {
      return '#ADD8E6'; 
    } else {
      return ''; 
    }
  }
        
  ngOnInit() { }

}

import { Component } from '@angular/core';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class Tab1Page {
  constructor() { }

  a: number = 0;
  b: number = 0;
  c: number = 0;
  d: number = 0; 

  ras(a: any, b: any, c: any) {
    try {
      this.a = parseFloat(a);
      this.b = parseFloat(b);
      this.c = parseFloat(c);
      this.d = 0; 

      
      if ((isNaN(this.a) === true) || (isNaN(this.b) === true) || (isNaN(this.c) === true)) {
        throw new Error('Parameter is not a number');
      }

      
      const sumCubesIfMultipleOf7 = (number: number) => number % 7 === 0 ? Math.pow(number, 3) : 0;


    
      this.d = sumCubesIfMultipleOf7(this.a) + sumCubesIfMultipleOf7(this.b) + sumCubesIfMultipleOf7(this.c);
      
    } catch (error) {
      console.log(error);
    }
  }
}

import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class Tab2Page {
  
   
  d: number = 0; 

  constructor() { }

  
  sum(a: any, b: any) {
    let start = parseInt(a);
    let end = parseInt(b);
    this.d = 0; 
   
    if (isNaN(start) || isNaN(end)) {
     throw new Error('Parameter is not a number');
    }

    
    for (let i = start; i <= end; i++) {
      if (i % 11 === 0 && i % 8 === 5) {
        this.d += i;
      }
    }
  }
}

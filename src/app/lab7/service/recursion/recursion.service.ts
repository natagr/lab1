import { LogService } from '../logger/log.service';
import { Injectable, Optional } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecursionService {
  yy: number = 0;
  private xy = new Map();

  constructor(@Optional() private logService: LogService) { }
  
 

  getRecursion(x: number, n: number, term: number, sum: number): void {
    sum += term; 

    let nextTerm = -term * x * x / ((2 * n) * (2 * n + 1)); 
    
    
    if (Math.abs(nextTerm) < 1E-12 || n > 50) { 
      this.yy = sum; 
      return; 
    }

   
    this.getRecursion(x, n + 1, nextTerm, sum);
  }

  
  calculateSine(x: number): void {
    this.getRecursion(x, 1, x, 0); 
  }

  getTab(xn: number, xk: number, h: number): Map<number, number> {
    let x = xn;
    this.xy = new Map(); 

    while (x <= xk) {
      this.calculateSine(x); 
      this.xy.set(x, this.yy); 
      if (this.logService) {
        this.logService.write(`x=${x.toFixed(2)} y=${this.yy.toFixed(4)}`);
      }
      x += h; 
    }

    return this.xy; 
  }
  
  
}

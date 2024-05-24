import { LogService } from '../logger/log.service';
import { Injectable, Optional } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  private xy = new Map();

  constructor(@Optional() private logService: LogService) { }

  getSeries(x: number) {
    let sum: number = 0,
        term = x,
        n = 0,
        factorial = 1,
        mul = 1; // Множник для зміни знаку
    const min = 1E-12;
  
    while (Math.abs(term) > min) {
      sum += term; // Додавання поточного члена до суми
      n++;
      mul = -mul; // Зміна знаку для наступного члена ряду
      for (let i = 1; i <= 2; i++) { // Тільки дві ітерації для обчислення (2n)*(2n+1)
        factorial *= (2 * n - 1 + i);
      }
      term = mul * Math.pow(x, 2 * n + 1) / factorial; // Обчислення наступного члена ряду
    }
  
    return sum;
  }
  
  
  
  getTab(xn: number = 0.1, xk: number = 3.14, h: number = 0.1) {
    let x = xn,
        y = 0.0;
    while (x <= xk) {
      y = this.getSeries(x);
      this.xy.set(x, y);
      if (this.logService) {
        this.logService.write(`x=${x.toFixed(2)} y=${y.toFixed(4)}`);
      }
      x += h;
    }
    return this.xy;
  }
  
}

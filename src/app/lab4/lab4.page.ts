import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {Polynomial} from "./classes/Polynomial"
import {QuadraticPolynomial} from "./classes/QuadraticPolynomial"
import {CubicPolynomial} from "./classes/CubicPolynomial"

@Component({
  selector: 'app-lab4',
  templateUrl: './lab4.page.html',
  styleUrls: ['./lab4.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Lab4Page implements OnInit {

  constructor() { }

  public polynomials: Polynomial[] = [];
  public max: number = Number.NEGATIVE_INFINITY;


  getColor(poly: number, max: number): string {
    
    return(Math.abs(poly - max) < 0.01) ? 'green' : '';
  }
  
   
   getRandomInt(max: number): number {
    return Math.floor(Math.random() * Math.floor(max) + 1);
  }

  ras(nn: any) {
    
    this.polynomials = new Array();
    
    let n = parseInt(nn);
   
    for (let i = 0; i < n; i++) {
      
      this.polynomials.push(new QuadraticPolynomial("Квадратичний", [this.getRandomInt(10), this.getRandomInt(20), this.getRandomInt(30)], this.getRandomInt(10)));
      
    
      this.polynomials.push(new CubicPolynomial("Кубічний", [this.getRandomInt(10), this.getRandomInt(20), this.getRandomInt(30), this.getRandomInt(40)], this.getRandomInt(10)));
    }
    this.max = 0;
      
    this.polynomials.forEach((element) => {
      element.evaluate();
      if (this.max < element.value) this.max = element.value;
      console.log(element.show())
    });
  }


  
  ngOnInit() {

  }

}

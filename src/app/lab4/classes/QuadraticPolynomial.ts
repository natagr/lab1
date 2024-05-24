import {Polynomial} from "./Polynomial"

export class QuadraticPolynomial extends Polynomial {
  
  constructor(override naz: string, override coefficients: number[], override x: number) {
      if (coefficients.length !== 3) {
          throw new Error('Квадратний поліном повинен мати 3 коефіцієнта.');
      }
      
      super();
  }
  
    evaluate() {
     
      this.value = this.coefficients[2] * this.x * this.x + this.coefficients[1] * this.x + this.coefficients[0];
    }
  }
  
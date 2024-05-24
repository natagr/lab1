import {Polynomial} from "./Polynomial"

export class LinearPolynomial extends Polynomial {
  
  constructor(override naz: string, override coefficients: number[], override x: number) {
      if (coefficients.length !== 2) {
          throw new Error('Лінійний поліном повинен мати 2 коефіцієнта.');
      }
      
      super();
  }
  
    evaluate( ) {
     
      this.value = this.coefficients[1] * this.x + this.coefficients[0];
    }
  }
  
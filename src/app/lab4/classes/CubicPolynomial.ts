import {Polynomial} from "./Polynomial"

export class CubicPolynomial extends Polynomial {

    constructor(override naz: string, override coefficients: number[], override x: number) {
        if (coefficients.length !== 4) {
            throw new Error('Кубічний поліном повинен мати 4 коефіцієнта.');
        }
        
        super();
    }
  
    evaluate( )  {
     
      this.value =  this.coefficients[3] * this.x * this.x * this.x + this.coefficients[2] * this.x * this.x + this.coefficients[1] * this.x + this.coefficients[0];
    }
  }
  
export abstract class Polynomial {
    naz!: string; 
    coefficients!: number[]; 
    value!: number;
    x!:number;
  
    constructor() {
    }

  
    show() {
      
      let result = "Назва: " + this.naz + ", Поліном: ";
      for (let i = this.coefficients.length - 1; i >= 0; i--) {
        if (this.coefficients[i] !== 0) {
          result += (i === 0) ? `${this.coefficients[i]}` : `${this.coefficients[i]}x^${i} + `;
        }
      }
      
      result = result.slice(0, -3);
      result += `, Значення: ${this.value}`;
    
      return result;
    }
  

    abstract evaluate(): void;

  
    
  }
  
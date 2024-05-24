import {LinearPolynomial} from "./LinearPolynomial"

describe('LinearPolynomial Testing', () => {
    let linearPolynomial: LinearPolynomial;
  
    beforeEach(() => {
        linearPolynomial = new LinearPolynomial('Лінійний', [3, 2], 5);
    });
  
    it('Створення екземпляру класу', () => {
      expect(linearPolynomial).toBeTruthy();
    });
  
   
    it('Створення екземпляру класу з некоректною кількістю коефіцієнтів', () => {
    
      expect(() => new LinearPolynomial('Лінійний поліном', [1, -2, 9], 5)).toThrow(new Error('Лінійний поліном повинен мати 2 коефіцієнта.'));
    });
   
    it('Розрахунок значення поліному при значенні x = 5', () => {
      
      linearPolynomial.evaluate(); 
      let evaluatedValue = linearPolynomial.value; 
     
      let expectedValue = linearPolynomial.coefficients[1] * 5 + linearPolynomial.coefficients[0]; 
  
      expect(evaluatedValue.toFixed(2)).toBe(expectedValue.toFixed(2));
    });
  
  
  });







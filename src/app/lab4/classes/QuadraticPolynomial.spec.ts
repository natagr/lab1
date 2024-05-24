import { QuadraticPolynomial } from "./QuadraticPolynomial";

describe('QuadraticPolynomial Testing', () => {
  let quadraticPolynomial: QuadraticPolynomial;

  beforeEach(() => {
    
    quadraticPolynomial = new QuadraticPolynomial('Квадратний', [1, -2, 1], 5);
  });

  it('Створення екземпляру класу', () => {
    expect(quadraticPolynomial).toBeTruthy();
  });

  it('Створення екземпляру класу з некоректною кількістю коефіцієнтів', () => {
    
    expect(() => new QuadraticPolynomial('Квадратний поліном', [1, -2], 5)).toThrow(new Error('Квадратний поліном повинен мати 3 коефіцієнта.'));
  });

  it('Розрахунок значення поліному при значенні x = 5', () => {
    
    quadraticPolynomial.evaluate(); 

    let evaluatedValue = quadraticPolynomial.value;
   
    let expectedValue = quadraticPolynomial.coefficients[2] * 5 * 5 + quadraticPolynomial.coefficients[1] * 5 + quadraticPolynomial.coefficients[0];

    
    expect(evaluatedValue.toFixed(2)).toBe(expectedValue.toFixed(2));
  });

});

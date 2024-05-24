import { CubicPolynomial } from "./CubicPolynomial";

describe('CubicPolynomial Testing', () => {
  let cubicPolynomial: CubicPolynomial;

  beforeEach(() => {
    
    cubicPolynomial = new CubicPolynomial('Кубічний', [1, 0, -3, 2], 5);
  });

  it('Створення екземпляру класу', () => {
    expect(cubicPolynomial).toBeTruthy();
  });

  it('Створення екземпляру класу з некоректною кількістю коефіцієнтів', () => {
    
    expect(() => new CubicPolynomial('Кубічний поліном', [1, -2, 1], 5)).toThrow(new Error('Кубічний поліном повинен мати 4 коефіцієнта.'));
  });

  it('Розрахунок значення кубічного поліному при значенні x = 5', () => {
    
    
    cubicPolynomial.evaluate();
    let evaluatedValue = cubicPolynomial.value;
    
    let expectedValue = cubicPolynomial.coefficients[3] * 5 * 5 * 5 
                      + cubicPolynomial.coefficients[2] * 5 * 5
                      + cubicPolynomial.coefficients[1] * 5
                      + cubicPolynomial.coefficients[0];

   
    expect(evaluatedValue.toFixed(2)).toBe(expectedValue.toFixed(2));
  });

});

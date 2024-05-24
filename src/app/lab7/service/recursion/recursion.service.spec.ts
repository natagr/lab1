import { TestBed } from '@angular/core/testing';
import { RecursionService } from './recursion.service';

describe('RecursionService', () => {
  let service: RecursionService;
  
  beforeEach((() => {
    TestBed.configureTestingModule({});
    service= TestBed.inject(RecursionService);
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Сума ряду за допомогою рекурсії значенння x=0.1 y=0.0998', () => {
    let x = 0.1;
    let y = 0.0998;
    service.calculateSine(x); 
    let calculatedY = service.yy; 
    expect(calculatedY.toFixed(2)).toBe(y.toFixed(2)); 
  });

});
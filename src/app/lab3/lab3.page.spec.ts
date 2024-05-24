import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Lab3Page } from './lab3.page';

describe('Lab3Page', () => {
  let component: Lab3Page;
  let fixture: ComponentFixture<Lab3Page>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(Lab3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

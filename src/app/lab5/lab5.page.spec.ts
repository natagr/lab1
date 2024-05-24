import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Lab5Page } from './lab5.page';

describe('Lab5Page', () => {
  let component: Lab5Page;
  let fixture: ComponentFixture<Lab5Page>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(Lab5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

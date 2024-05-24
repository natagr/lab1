import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Lab7Page } from './lab7.page';

describe('Lab7Page', () => {
  let component: Lab7Page;
  let fixture: ComponentFixture<Lab7Page>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(Lab7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

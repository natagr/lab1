import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lab10Page } from './lab10.page';

describe('Lab10Page', () => {
  let component: Lab10Page;
  let fixture: ComponentFixture<Lab10Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Lab10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccomplishedformPage } from './accomplishedform.page';

describe('AccomplishedformPage', () => {
  let component: AccomplishedformPage;
  let fixture: ComponentFixture<AccomplishedformPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AccomplishedformPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

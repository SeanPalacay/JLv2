import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DhomePage } from './dhome.page';

describe('DhomePage', () => {
  let component: DhomePage;
  let fixture: ComponentFixture<DhomePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DhomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ForgetpassPage } from './forgetpass.page';

describe('ForgetpassPage', () => {
  let component: ForgetpassPage;
  let fixture: ComponentFixture<ForgetpassPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ForgetpassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

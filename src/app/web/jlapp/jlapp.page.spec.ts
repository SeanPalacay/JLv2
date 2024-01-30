import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JlappPage } from './jlapp.page';

describe('JlappPage', () => {
  let component: JlappPage;
  let fixture: ComponentFixture<JlappPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(JlappPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

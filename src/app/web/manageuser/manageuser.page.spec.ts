import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManageuserPage } from './manageuser.page';

describe('ManageuserPage', () => {
  let component: ManageuserPage;
  let fixture: ComponentFixture<ManageuserPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ManageuserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

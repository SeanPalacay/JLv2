import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommunicationPage } from './communication.page';

describe('CommunicationPage', () => {
  let component: CommunicationPage;
  let fixture: ComponentFixture<CommunicationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CommunicationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommcontentPage } from './commcontent.page';

describe('CommcontentPage', () => {
  let component: CommcontentPage;
  let fixture: ComponentFixture<CommcontentPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CommcontentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

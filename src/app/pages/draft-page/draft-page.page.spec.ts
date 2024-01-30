import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { DraftPagePage } from './draft-page.page';

describe('DraftPagePage', () => {
  let component: DraftPagePage;
  let fixture: ComponentFixture<DraftPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DraftPagePage],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(DraftPagePage);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { UploadPagePage } from './upload-page.page';

describe('UploadPagePage', () => {
  let component: UploadPagePage;
  let fixture: ComponentFixture<UploadPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UploadPagePage],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(UploadPagePage);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

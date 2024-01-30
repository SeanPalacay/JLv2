import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GeolocatePage } from './geolocate.page';

describe('GeolocatePage', () => {
  let component: GeolocatePage;
  let fixture: ComponentFixture<GeolocatePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GeolocatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

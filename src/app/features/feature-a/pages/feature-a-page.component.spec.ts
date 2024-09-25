import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureAPageComponent } from './feature-a-page.component';

describe('FeatureAPageComponent', () => {
  let component: FeatureAPageComponent;
  let fixture: ComponentFixture<FeatureAPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeatureAPageComponent]
    });
    fixture = TestBed.createComponent(FeatureAPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

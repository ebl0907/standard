import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureBPageComponent } from './feature-b-page.component';

describe('FeatureBPageComponent', () => {
  let component: FeatureBPageComponent;
  let fixture: ComponentFixture<FeatureBPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeatureBPageComponent]
    });
    fixture = TestBed.createComponent(FeatureBPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

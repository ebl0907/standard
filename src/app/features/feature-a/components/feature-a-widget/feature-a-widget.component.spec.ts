import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureAWidgetComponent } from './feature-a-widget.component';

describe('FeatureAWidgetComponent', () => {
  let component: FeatureAWidgetComponent;
  let fixture: ComponentFixture<FeatureAWidgetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeatureAWidgetComponent]
    });
    fixture = TestBed.createComponent(FeatureAWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureBWidgetComponent } from './feature-b-widget.component';

describe('FeatureBWidgetComponent', () => {
  let component: FeatureBWidgetComponent;
  let fixture: ComponentFixture<FeatureBWidgetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeatureBWidgetComponent]
    });
    fixture = TestBed.createComponent(FeatureBWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

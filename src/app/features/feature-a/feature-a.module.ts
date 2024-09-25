import { NgModule } from '@angular/core';
import { FeatureAPageComponent } from './pages/feature-a-page.component';
import { FeatureAWidgetComponent } from './components/feature-a-widget/feature-a-widget.component';

@NgModule({
  declarations: [],
  imports: [FeatureAPageComponent, FeatureAWidgetComponent],
  providers: [],
  bootstrap: [],
  exports: [FeatureAPageComponent]
})
export class FeatureAModule {}

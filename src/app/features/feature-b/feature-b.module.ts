import { NgModule } from '@angular/core';
import { FeatureBPageComponent } from './pages/feature-b-page.component';
import { FeatureBWidgetComponent } from './components/feature-b-widget/feature-b-widget.component';

@NgModule({
  declarations: [],
  imports: [FeatureBPageComponent, FeatureBWidgetComponent],
  providers: [],
  bootstrap: [],
  exports: [FeatureBPageComponent]
})
export class FeatureBModule {}

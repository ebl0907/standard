import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { SharedModule } from './shared/shared.module';
import { FeatureBModule } from './features/feature-b/feature-b.module';
import { FeatureAModule } from './features/feature-a/feature-a.module';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { CoreModule } from './core/core.module';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

// Función para configurar el idioma predeterminado
export function setupTranslateServiceFactory(
  service: TranslateService
): Function {
  return () => {
    service.addLangs(['en', 'es', 'ca']);
    service.setDefaultLang('en');
    const browserLang = service.getBrowserLang();
    if (browserLang)
      service.use(browserLang.match(/en|es|ca/) ? browserLang : 'en');
  };
}

@NgModule({
  declarations: [AppComponent, MainLayoutComponent, AdminLayoutComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FeatureAModule,
    FeatureBModule,
    CoreModule,
    RouterModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: setupTranslateServiceFactory,
      deps: [TranslateService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from "@angular/core";
import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader, TranslatePipe } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { DateFormatPipe } from "./pipes/date-format.pipe";
import { HighlightDirective } from "./directives/highlight.directive";
import { ButtonComponent } from "./components/button/button.component";
import { OnlyAdminDirective } from "./directives/only-admin.directive";
import { AuthGuard } from "./guards/auth.guard";
import { AuthInterceptor } from "../core/interceptors/http-request-interceptor.interceptor";
import { HTTP_INTERCEPTORS } from "@angular/common/http";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    DateFormatPipe,
    HighlightDirective,
    ButtonComponent,
    OnlyAdminDirective,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    TranslatePipe
  ],
  exports: [
    DateFormatPipe,
    HighlightDirective,
    ButtonComponent,
    OnlyAdminDirective,
    TranslateModule,
    TranslatePipe
  ]
})
export class SharedModule { }

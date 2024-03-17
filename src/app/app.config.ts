import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideClientHydration } from '@angular/platform-browser';
import { HttpClient, provideHttpClient, withInterceptors  } from '@angular/common/http';
import { TranslateHttpLoader,  } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideClientHydration(),
    provideAnimationsAsync(), 
    
    provideHttpClient(withInterceptors([])),
    importProvidersFrom(TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }))]
};

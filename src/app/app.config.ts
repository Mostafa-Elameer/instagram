import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, Router, RouterModule, withViewTransitions } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { headersInterceptor } from './sheard/interceptors/headers.interceptor';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { provideAnimations } from '@angular/platform-browser/animations';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withViewTransitions()),
  provideAnimations(),



  provideClientHydration(), provideHttpClient(withFetch(), withInterceptors([headersInterceptor])),
  importProvidersFrom(RouterModule, HttpClientModule, RouterModule, CarouselModule)
  ]
};

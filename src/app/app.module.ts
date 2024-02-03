import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './intranet/shared/not-found/not-found.component';
import { ToastrModule } from 'ngx-toastr';
import { HTTP_INTERCEPTORS, provideHttpClient, withFetch } from '@angular/common/http';
import { appConfig } from './config/app.config';
import { CookieService } from 'ngx-cookie-service';
import { jwtInterceptor } from './intranet/core/interceptors/jwt-interceptor.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      closeButton: true, // Habilita el botón de cierre
    })
  ],
  providers: [
    provideHttpClient(withFetch()),
    provideClientHydration(),
    CookieService,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useValue: jwtInterceptor,
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

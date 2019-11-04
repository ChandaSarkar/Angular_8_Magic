import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Interceptor
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { cdmBasicInceptor } from './Interceptors/cdmBasic.Intereptor'; 
import { cdmUrlInterceptor } from './Interceptors/cdmUrl.Intereptor';
import { cdmHeaderInterceptor } from './Interceptors/cdmHeader.Intereptor';
import { cdmSampleService } from './Interceptors/cdmSample.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [,
  	cdmSampleService,
  	{ provide: HTTP_INTERCEPTORS, useClass: cdmBasicInceptor, multi: true },
  	{ provide: HTTP_INTERCEPTORS, useClass: cdmUrlInterceptor, multi: true },
  	{ provide: HTTP_INTERCEPTORS, useClass: cdmHeaderInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

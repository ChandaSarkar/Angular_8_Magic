import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';

// Custom Services
import { cdmProducts } from './Common/Services/cdmProducts.service';
import { cdmHttpInterceptor } from './Common/Interceptors/cdmHttpInterceptor';
import { cdmMockHttpInterceptor } from './Common/Interceptors/cdmMockHttpInterceptor';

import { environment } from '../environments/environment';
export const isMock = environment.mock;

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
  	cdmProducts,
  	{ 
  		provide: HTTP_INTERCEPTORS, 
  		useClass: isMock ? cdmMockHttpInterceptor : cdmHttpInterceptor, 
  		multi: true 
  	}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

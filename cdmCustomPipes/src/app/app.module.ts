import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

// Pipes
import { cdmCustomPipe } from './Pipes/cdmCustom.pipes';
import { cdmCustomParameterized } from './Pipes/cdmCustomParameterized.pipes';
import { cdmPureImPure } from './Pipes/cdmPureImPure.pipes';


@NgModule({
  declarations: [
    AppComponent,
    cdmCustomPipe,
    cdmCustomParameterized,
    cdmPureImPure
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

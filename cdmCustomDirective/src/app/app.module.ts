import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Directive imported
import { cdmCustomDirective } from './Directives/cdmCustom.directive';
import { cdmStructuralDirective } from './Directives/cdmStructural.directive';
import { cdmStructuralToggle } from './Directives/cdmStructuralToggle.directive';
import { cdmHostBinding } from './Directives/cdmHostBinding.directive';
import { cdmHostListner } from './Directives/cdmHostListner.directive';

@NgModule({
  declarations: [
    AppComponent,
    cdmCustomDirective,
    cdmStructuralDirective,
    cdmStructuralToggle,
    cdmHostBinding,
    cdmHostListner
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

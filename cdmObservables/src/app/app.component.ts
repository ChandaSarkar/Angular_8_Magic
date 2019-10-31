import { Component, OnDestroy } from '@angular/core';
import { cdmSampleObservable } from './Observable/cdmSample.observable';
import { Observable, Observer, Subscription, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  values:any = 'cdmObservables';

  _cdmSampleObservable: cdmSampleObservable;
  _subscribed: Subscription;

  constructor() {
  		// For Example #1
  		this._cdmSampleObservable = new cdmSampleObservable();
  		this._subscribed = this._cdmSampleObservable.cdmObservable.subscribe(this.fetchUpdatedValue.bind(this));
  }

  fetchUpdatedValue(data) {
  	this.values = data;
  }

   clickHandler() {
   	this._cdmSampleObservable.fetchData();
   }

   unsubscribeObservable() {
  		this._subscribed.unsubscribe(); 
   }

   ngOnDestroy(): void {
   	this._subscribed.unsubscribe();
   }
}

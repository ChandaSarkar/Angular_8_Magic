import { Observable, Observer } from 'rxjs';

export class cdmSampleObservable  {
	cdmObservable: Observable<number>;
	observer: Observer<number>;

	constructor() {
		this.cdmObservable = new Observable((observer: Observer<number>) => {
			this.observer = observer;
		});
	}

	fetchData() {
		this.observer.next(Math.random());
	}
}
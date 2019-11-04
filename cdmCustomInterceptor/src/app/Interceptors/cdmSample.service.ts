import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class cdmSampleService {
	url: string = 'assets/responseData.json';
	constructor (private http: HttpClient) {}

	getData(): Observable<any> {
		debugger;
		return this.http.get(this.url);
	}
} 
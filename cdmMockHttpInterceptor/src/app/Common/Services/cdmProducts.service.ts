import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class cdmProducts {
	url: string = 'https://jsonplaceholder.typicode.com/users';

	constructor(private http: HttpClient) {}
	
	getAllProducts(): Observable<any> {
		return this.http.get(this.url);
	}
}
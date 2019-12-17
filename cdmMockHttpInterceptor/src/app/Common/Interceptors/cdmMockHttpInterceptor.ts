import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpInterceptor, HttpRequest, HttpResponse, HttpHandler, HttpEvent } from '@angular/common/http';

@Injectable()
export class cdmMockHttpInterceptor implements HttpInterceptor {
	products = [
		{ id: 1, name: 'Red Kurti', brand: 'Akon' },
		{ id: 2, name: 'Blue Kurti', brand: 'Akkriti' },
		{ id: 3, name: 'Pink Traditional Skirt', brand: 'ONLY' },
		{ id: 4, name: 'Red T-shirt', brand: 'MANGO' }
	];
	url: string = 'https://jsonplaceholder.typicode.com/users';

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any[]>> {
		if (request.url === this.url) {
			console.log('Mocked Request ::' + request.url);
			let mockRespose = new HttpResponse({
				status: 200,
				body: this.products
			});
			return of(mockRespose);
		}

		//return next.handle(request);
	}
}
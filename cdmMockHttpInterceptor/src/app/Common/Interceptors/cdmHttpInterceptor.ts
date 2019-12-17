import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpInterceptor, HttpRequest, HttpResponse, HttpHandler, HttpEvent } from '@angular/common/http';

@Injectable()
export class cdmHttpInterceptor implements HttpInterceptor {
	
	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any[]>> {
		return next.handle(request);
	}
}
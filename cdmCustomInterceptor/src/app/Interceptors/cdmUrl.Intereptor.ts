import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpInterceptor, HttpRequest, HttpResponse, HttpHandler, HttpEvent } from '@angular/common/http';

@Injectable()
export class cdmUrlInterceptor implements HttpInterceptor {
	
	intercept(req: HttpRequest<any>, next: HttpHandler) : Observable<HttpEvent<any>> {
		console.log('Interceptor 2');
		return next.handle(req.clone({ 'url': req.url + "?data=none" }));
	}
}
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpInterceptor, HttpRequest, HttpResponse, HttpHandler, HttpEvent } from '@angular/common/http';

@Injectable()
export class cdmBasicInceptor implements HttpInterceptor {
	
	intercept(req: HttpRequest<any>, next: HttpHandler) : Observable<HttpEvent<any>> {
		console.log('Interceptor 1');
		return next.handle(req);
		//return next.handle(req.clone({ 'params': req.params.set('name','donkey') }));
	}
}
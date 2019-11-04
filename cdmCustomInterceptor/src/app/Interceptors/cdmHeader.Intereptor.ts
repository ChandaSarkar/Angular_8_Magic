import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpInterceptor, HttpRequest, HttpResponse, HttpHandler, HttpEvent } from '@angular/common/http';

@Injectable()
export class cdmHeaderInterceptor implements HttpInterceptor {
	
	intercept(req: HttpRequest<any>, next: HttpHandler) : Observable<HttpEvent<any>> {
		console.log('Interceptor 3');
		const modified = req.clone({ 
		  setHeaders: { "X-Man": "Wolverine" } 
		});
		
		return next.handle(modified);
	}
}
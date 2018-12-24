import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService  implements HttpInterceptor {

  constructor(public router: Router) { }
  //function which will be called for all http calls
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    //how to update the request Parameters

      console.log('-------------angular url========='+this.router.url);
    
    if(this.router.url.includes('panel'))
    {
      request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${localStorage.getItem('accesstoken')}`
      }
    });
    console.log("added header to request ", request);
  }else
  {
     console.log("not added header ", request);

  }
    return next.handle(request).pipe(
      tap(
        event => {
          //logging the http response to browser's console in case of a success
          if (event instanceof HttpResponse) {
            console.log("api call success :", event);
          }
        },
        error => {
          //logging the http response to browser's console in case of a failuer
          if (error instanceof HttpErrorResponse) {
            if(error.status==401)
            {
            console.log("api call error --------401----------:", error);
            this.router.navigate(['/login']);
            }
          }
        }
      )
    );
  }
}
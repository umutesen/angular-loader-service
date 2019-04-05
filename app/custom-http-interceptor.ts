import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { HttpEvent } from '@angular/common/http';
import { tap, delay, finalize } from 'rxjs/operators';
import { SpinnerService } from './spinner.service';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {

  constructor(private spinnerService: SpinnerService,
    private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log('intercep..');
    this.spinnerService.visibility = true;

    return next.handle(req).pipe(tap((event: HttpEvent<any>) => {
      // if the event is for http response
      if (event instanceof HttpResponse) {
        // stop our loader here
        this.spinnerService.visibility = false;
      }
    }, (err: any) => {
      // if any error (not for just HttpResponse) we stop our loader bar
      this.spinnerService.visibility = false;
    })); 
  }
}

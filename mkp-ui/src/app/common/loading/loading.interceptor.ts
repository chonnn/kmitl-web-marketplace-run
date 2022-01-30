import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {finalize, Observable } from 'rxjs';
import {LoadingService} from "./loading.service";
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private loadingService: LoadingService,
              private spinner: NgxSpinnerService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // this.loadingService.startLoading();
    this.spinner.show();
    return next.handle(request).pipe(
      finalize(() => {
        // this.loadingService.stopLoading();
        this.spinner.hide();
      })
    );
  }
}

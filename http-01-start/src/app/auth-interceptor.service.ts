import { tap } from "rxjs/operators";
import {
  HttpEvent,
  HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Observable } from "rxjs";

export class AuthInterceptorService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log("Request is on its way");
    const newRequest = req.clone({
      headers: req.headers.append("Auth", "xyz"),
    });
    return next.handle(newRequest).pipe(
      tap((event) => {
        console.log(event);
        if (event.type === HttpEventType.Response) {
          console.log("Response arrived, body data: ", event.body);
        }
      })
    );
  }
}

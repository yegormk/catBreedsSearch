import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";

import {Observable} from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    const personalToken = 'live_IjOock85Ffowou53yX3qapxIctsgnf89rjcrindoppUqDlbBtFKpIxODwkjWitPU'

    const personalTokenAdded = req.clone({
      params: req.params.append('api_key',
        personalToken)
    })

    return next.handle(personalTokenAdded);
  }
}

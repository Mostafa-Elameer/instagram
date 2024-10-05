import { HttpInterceptorFn } from '@angular/common/http';

export const headersInterceptor: HttpInterceptorFn = (req, next) => {


  if (typeof localStorage !== "undefined") {
    if (localStorage.getItem("userTokenSocial") !== null) {
      req = req.clone({
        setHeaders: { token: localStorage.getItem("userTokenSocial")! }
      })
    }
  }
  return next(req);

};

import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { flatMap } from 'rxjs';

export const loginGuard: CanActivateFn = (route, state) => {
  let _Router = inject(Router)


  if (typeof localStorage !== "undefined") {
    if (localStorage.getItem("userTokenSocial") !== null) {
      _Router.navigate(["/home"])
      return false
    } else {
      return true
    }

  }
  return false;
};

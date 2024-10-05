import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const pageGuard: CanActivateFn = (route, state) => {
  let _Router = inject(Router)

  if (typeof localStorage !== "undefined") {

    if (localStorage.getItem("userTokenSocial") !== null) {
      return true
    } else {
      _Router.navigate(['/login'])
      return false

    }
  }

  return false;
};

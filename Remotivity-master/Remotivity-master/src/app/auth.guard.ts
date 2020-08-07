import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  // Protects the home route by activating the route if the user is logged in
  // Will not allow user or admin to go to home without logging in
  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  {
    // if (localStorage.getItem('currentUser')) {
    //   // logged in so return true
    //   return true;
    // }

    // // not logged in so redirect to login page
    // this.router.navigate(['/login']);
    // return false;

    // Remove and uncomment above when done testing
    return true;
  }
  
}

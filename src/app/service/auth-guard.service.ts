import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(public router: Router) {}

  canActivate(): boolean {
    
    const token = localStorage.getItem('accesstoken');

    if (token==null) {
      this.router.navigate(['/login']);
      console.log('redirect to login-------false-AuthGuard-');
      return false;
    }
    console.log('redirect to login--------true-AuthGUARD');
    return true;
  }
}

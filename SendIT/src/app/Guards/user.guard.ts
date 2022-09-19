import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  user = JSON.parse(localStorage.getItem('user') as string)

  token = localStorage.getItem('token') as string

  
  constructor(private router:Router) {
    
  }
  canActivate(){
    if(this.user.role === 'user' && !!this.token){
      return true
    }
    else{
      this.router.navigate(['/auth/login'])
      return false
    }
  }
  
}
import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

user = JSON.parse(localStorage.getItem('user') as string)

token = localStorage.getItem('token') as string

  constructor( private router: Router){}
 
  canActivate(){
    if(this.user.role === 'admin' && this.token){
      return true
    }
    else if(!!this.user && !this.token){
      this.router.navigate(['/auth/login'])
      return false
    }
    return false
  }
  
}


import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login, LoginUser, RegisterUser } from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = environment.baseUrl
  
  
  constructor(private http:HttpClient) { }


  signUp(user:RegisterUser):Observable<{message:string}>{


    console.log(this.baseUrl)

    console.log(user)
    return this.http.post<{message:string}>('http://localhost:8000/api/users/signup',user)
  }


  signIn(login:LoginUser):Observable<Login>{

    return this.http.post<Login>('http://localhost:8000/api/users/signin',login)
 }
}

import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/Services/auth.service';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';
import {ThemePalette} from '@angular/material/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {

  @ViewChild('form') form!:NgForm; 
  sub!:Subscription
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 50;
  error = false;
  message!:string;

  wrongPassword = 'You entered wrong password';
  notFound='User is not found'

  constructor(private router:Router,private authService:AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(){


    this.sub = this.authService.signIn(this.form.value).subscribe((res) => {



      if(res.message === "wrong password"){



        this.error = true;

        this.message = this.wrongPassword
      }else if(res.message ="not found"){

        this.error = true;

        this.message = this.notFound

      }
      

     if(res.user.role === "user"){

      

      localStorage.setItem('token',res.token)
      localStorage.setItem('user',JSON.stringify(res.user))
     


      this.router.navigate(['/parcels'])
     }else if(res.user.role === "admin"){

      localStorage.setItem('token',res.token)
      localStorage.setItem('user',JSON.stringify(res.user))

      this.router.navigate(['/admin'])
     }else if(res.message === "wrong password"){


      console.log(res.message)

      this.error = true;

      this.message = this.wrongPassword
     }else{


      this.router.navigate(['/auth/login'])
     }


      if(res.message){

        console.log('wrong password')
      }
    })
    

  }
  
ngOnDestroy(): void {
  this.sub.unsubscribe()
}
}

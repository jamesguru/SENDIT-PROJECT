import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit,OnDestroy {
  form!: FormGroup;

  name!: string;
  email!: string;
  password!: string;

 error = false;
 


  message!:string;

  successMessage = 'You have registered successfully. Go a head and login.';

  passwordMatch = "passwords do not match";
  

  existMessage = 'Email is already in use';

  sub!:Subscription

  constructor(private auth:AuthService,private router:Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
        this.checkSpecialCharacters,
        this.checkNumber,
        this.checkCapital,
      ]),

      confirmPassword: new FormControl(null, [Validators.required]),
    });
  }

  checkSpecialCharacters(
    control: FormControl
  ): { [s: string]: boolean } | null {
    const value = control.value;
    const special = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\?]+/.test(value);
    return !special ? { special: true } : null;
  }
  checkNumber(control: FormControl): { [s: string]: boolean } | null {
    const value = control.value;
    const number = /[0-9]+/.test(value);
    return !number ? { number: true } : null;
  }
  checkCapital(control: FormControl): { [s: string]: boolean } | null {
    const value = control.value;
    const capital = /[A-Z]+/.test(value);
    return !capital ? { capital: true } : null;
  }
  checkMinimum(): boolean {
    const result = this.form.get('password')?.errors!['minlength'] as {
      actualLength: number;
      requiredLength: number;
    };
    if (result.actualLength < result.requiredLength) {
      return true;
    } else {
      return false;
    }
  }



  onSubmit() {


    if(this.form.value.password !== this.form.value.confirmPassword){


      this.error = true;

      this.message = this.passwordMatch;

    }


    this.sub = this.auth.signUp({name:this.form.value.name, email:this.form.value.email, password:this.form.value.password}).subscribe(val => {


      if(val.message === "success"){


        this.router.navigate(['/auth/login']);
        
      }else if(val.message === "exist"){


        this.error= true

        this.message = this.existMessage;
        console.log(this.message)
      }


     
      
    })
    
  }


  goToLogin(){

    this.router.navigate(['/auth/login']);
    
  }

ngOnDestroy(): void {
  
  this.sub.unsubscribe()
}
  
}

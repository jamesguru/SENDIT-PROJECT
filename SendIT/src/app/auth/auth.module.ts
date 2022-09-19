import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorComponent } from '../shared/error/error.component';
import { SuccessComponent } from '../shared/success/success.component';
import { SharedModule } from '../shared/shared.module';

import {MatNativeDateModule} from '@angular/material/core';


@NgModule({
  declarations: [
    
    LoginComponent,
    RegisterComponent,
   
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
    
  ]
})
export class AuthModule { }

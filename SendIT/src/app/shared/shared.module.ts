import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error/error.component';
import { SuccessComponent } from './success/success.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    
  
    ErrorComponent,
    SuccessComponent
  ],
  imports: [
    CommonModule,

    FontAwesomeModule
    
  ],

  exports:[

    ErrorComponent,

    SuccessComponent,

  ]
})
export class SharedModule { }

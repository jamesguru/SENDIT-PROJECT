import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';

import { ParcelsComponent } from './parcels/parcels.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    
    ParcelsComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FontAwesomeModule,
    FormsModule
  ]
})
export class UsersModule { }

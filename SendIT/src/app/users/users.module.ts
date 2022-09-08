import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';

import { ParcelsComponent } from './parcels/parcels.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  declarations: [
    
    ParcelsComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FontAwesomeModule,
    FormsModule,
    GoogleMapsModule
  ]
})
export class UsersModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';

import { ParcelsComponent } from './parcels/parcels.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { NgxPaginationModule } from 'ngx-pagination';
import { StoreModule } from '@ngrx/store';
import { ParcelReducer } from '../Reducer/reducer/parcelsReducer';
import { EffectsFeatureModule, EffectsModule } from '@ngrx/effects';
import { ParcelEffectsService } from '../Reducer/effects/parcelsEffects';
import { FilterPipe } from '../pipes/filter.pipe';
@NgModule({
  declarations: [
    
    ParcelsComponent,

    FilterPipe
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FontAwesomeModule,
    FormsModule,
    GoogleMapsModule,
    NgxPaginationModule,
    FormsModule,

    StoreModule.forFeature('parcel',ParcelReducer),
    EffectsModule.forFeature([ParcelEffectsService]),
    
  ]
})
export class UsersModule { }

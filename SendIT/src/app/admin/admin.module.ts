import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GoogleMapsModule } from '@angular/google-maps'
import { NgxPaginationModule } from 'ngx-pagination';
import { StoreModule } from '@ngrx/store';
import { ParcelReducer } from '../Reducer/reducer/parcelsReducer';
import { EffectsModule } from '@ngrx/effects';
import { ParcelEffectsService } from '../Reducer/effects/parcelsEffects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from '../pipes/search.pipe';

@NgModule({
  declarations: [
    AdminComponent,
    SearchPipe,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FontAwesomeModule,
    GoogleMapsModule,
    NgxPaginationModule,

    FormsModule,

    ReactiveFormsModule,

    

    StoreModule.forFeature('parcel',ParcelReducer),

    EffectsModule.forFeature([ParcelEffectsService])
  ]
    
  
})
export class AdminModule { }

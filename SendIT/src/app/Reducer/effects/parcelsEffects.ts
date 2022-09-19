import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map, mergeMap, of } from 'rxjs';
import { ParcelService } from 'src/app/Services/parcel.service';
import {Parcel} from '../../interfaces/Parcel'

import * as ParcelsActions from '../actions/parcelsActions'

@Injectable({
  providedIn: 'root'
})
export class ParcelEffectsService {

  constructor(private actions:Actions, private parcelService:ParcelService) { }

  loadParcel= createEffect(()=>{

    return this.actions.pipe(
      ofType(ParcelsActions.LoadParcels),
      concatMap(()=> this.parcelService.getParcels().pipe(
        map(parcels=>ParcelsActions.LoadParcelSuccess({parcels})),
        catchError(error=>of(ParcelsActions.LoadParcelFailure({error:error.message})))
      ))
    )
  })

  deleteParcel= createEffect(()=>{
    return this.actions.pipe(
      ofType(ParcelsActions.DeleteParcel),
      mergeMap(action=> this.parcelService.deleteParcel(action.id).pipe(
        map(res=>ParcelsActions.DeleteParcelSuccess({deletemessage:res.message})),
        catchError(error=>of(ParcelsActions.DeleteParcelFailure({error:error.message})))
      ))

    )
  })

  addParcel=createEffect(()=>{
    return this.actions.pipe(
        ofType(ParcelsActions.AddParcel),
        mergeMap(action=>this.parcelService.createParcel(action.newParcel).pipe(
            map(res=>ParcelsActions.AddParcelSuccess({addMessage:res.message})),
            catchError(error=>of(ParcelsActions.AddParcelFailure({error:error})))
        ))
    )
})


updateParcel=createEffect(()=>{
  return this.actions.pipe(
      ofType(ParcelsActions.updateParcel),
      mergeMap(action=>this.parcelService.updateParcels(action.updatedParcel).pipe(
          map(res=>ParcelsActions.AddParcelSuccess({addMessage:res.message})),
          catchError(error=>of(ParcelsActions.AddParcelFailure({error:error})))
      ))
  )
})

getUserParcels= createEffect(()=>{

  return this.actions.pipe(
    ofType(ParcelsActions.getUserParcels),
    mergeMap(action => this.parcelService.getParcelsForUser(action.email).pipe(
      map(parcels=>ParcelsActions.getUserParcelSuccess({parcels})),
      catchError(error=>of(ParcelsActions.getUserParcelFailure({error:error.message})))
    ))
  )
})



}
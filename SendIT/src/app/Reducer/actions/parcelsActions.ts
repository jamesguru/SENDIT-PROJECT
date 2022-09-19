import { createAction, props } from "@ngrx/store";
import {Parcel} from '../../interfaces/Parcel';


export const SelectedId= createAction('SelectedId', props<{id:number}>())


export const LoadParcels = createAction('LoadParcels')
export const LoadParcelSuccess = createAction('LoadParcelsSuccess',
props<{parcels:Parcel[]}>())
export const LoadParcelFailure = createAction('LoadParcelFailure',
props<{error:string}>())


export const DeleteParcel = createAction('DeleteParcel',
props<{id:number}>())
export const DeleteParcelSuccess = createAction('DeleteParcelSuccess',
props<{deletemessage:string}>())
export const DeleteParcelFailure=createAction('DeleteParcelFailure',
props<{error:string}>())

export const updateParcel= createAction('updateParcel',
props<{updatedParcel:Parcel}>()
)


export const updateParcelSuccess= createAction('AddParcelSuccess',
props<{updateMessage:string}>()
)
export const updateParcelFailure= createAction('AddParcelFailure',
props<{error:string}>()
)

export const getUserParcels= createAction('getUserParcels',
props<{email:string}>()
)
export const getUserParcelSuccess= createAction('getUserParcelsSuccess',
props<{parcels:Parcel[]}>()
)

export const getUserParcelFailure= createAction('getUserParcelsFailure',
props<{error:string}>()
)

export const AddParcel= createAction('AddParcel',
props<{newParcel:Parcel}>()
)
export const AddParcelSuccess= createAction('AddParcelSuccess',
props<{addMessage:string}>()
)
export const AddParcelFailure= createAction('AddParcelFailure',
props<{error:string}>()
)
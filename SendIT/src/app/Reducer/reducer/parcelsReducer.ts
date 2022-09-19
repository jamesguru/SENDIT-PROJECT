
import {
    createFeatureSelector,
    createReducer,
    createSelector,
    on,
  } from '@ngrx/store';

  import {Parcel} from '../../interfaces/Parcel'
  
  import * as Actions from '../actions/parcelsActions';
  
  export interface ParcelState {
    parcels: Parcel[];
    parcelsError: string;
    error: string;
    deleteMessage: string;
    parcelid: number;
    addMessage: string;
    status:number;
    updateMessage:string;
    getUserParcelsMessage:string,
  }
  
  const initialState: ParcelState = {
    parcels: [],
    parcelsError: '',
    error: '',
    deleteMessage: '',
    parcelid: 0,
    addMessage: '',

    updateMessage:'',

    getUserParcelsMessage:'',
    status:0
  };
  
  const getParcelFeatureState = createFeatureSelector<ParcelState>('parcel');
  
  export const getParcels = createSelector(

    
    getParcelFeatureState,
    (state) => state.parcels
  );
  
  export const getParcelid = createSelector(
    getParcelFeatureState,
    (state) => state.parcelid
  );
  export const getParcel = createSelector(
    getParcelFeatureState,
    getParcelid,
    (state, id) => state.parcels.find((parcel) => parcel.id === id)
  );
  
  export const ParcelReducer = createReducer(
    initialState,
    on(Actions.LoadParcelSuccess, (state, action): ParcelState => {
      return { ...state, parcels: action.parcels };
    }),
    on(Actions.LoadParcelFailure, (state, action): ParcelState => {
      return { ...state, parcelsError: action.error };
    }),
    on(Actions.DeleteParcelSuccess, (state, action): ParcelState => {
      return { ...state, deleteMessage: action.deletemessage };
    }),
    on(Actions.DeleteParcelFailure, (state, action): ParcelState => {
      return { ...state, error: action.error };
    }),
    on(Actions.SelectedId, (state, action): ParcelState => {
      return { ...state, parcelid: action.id };
    })
    ,on(Actions.AddParcelSuccess,(state,action):ParcelState=>{
      return{...state, addMessage:action.addMessage}
  }),on(Actions.AddParcelFailure,(state,action):ParcelState=>{
      return{...state, error:action.error}
  
  }),on(Actions.updateParcelSuccess,(state,action):ParcelState=>{
    return{...state,  updateMessage: action.updateMessage}

}),on(Actions.getUserParcelSuccess,(state,action):ParcelState=>{
  return{...state,  parcels: action.parcels}

}),on(Actions.getUserParcelFailure,(state,action):ParcelState=>{
  return{...state,  getUserParcelsMessage: action.error}

})
  );
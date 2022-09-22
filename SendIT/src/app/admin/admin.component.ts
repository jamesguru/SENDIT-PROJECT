import { Component, OnInit, ViewChild } from '@angular/core';
import {
  faBell,
  faArrowRight,
  faClose,
  faTrash,
  faUser,
  faPeopleGroup,
  faInbox,
  faArchive
  
} from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';

import * as Actions from '../Reducer/actions/parcelsActions';
import { getParcels, ParcelState } from '../Reducer/reducer/parcelsReducer';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Parcel } from '../interfaces/Parcel';
import { Router } from '@angular/router';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { Marker } from '../interfaces/Marker';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  center: google.maps.LatLngLiteral = { lat: 1, lng: 38 };
  zoom = 6;
  markerOptions: google.maps.MarkerOptions = { draggable: false };
  markerPositions: google.maps.LatLngLiteral[] = [];

  

  user = JSON.parse(localStorage.getItem('user') as string)

  parcels$ = this.store.select(getParcels);

  p: number = 1;
  collection: any[] = [];
  form!: FormGroup;
  faBell = faBell;
  faUser=faUser;
  faArrowRight = faArrowRight;
  faCancel = faClose;
  faTrash = faTrash;
  faInbox=faInbox;
  openAddModal: boolean = false;
  filteredText: string = '';
  parcel!: Parcel;
  faArchive=faArchive;

  marker!: Marker;
  
  
  faUsers= faPeopleGroup;
  constructor(private store: Store<ParcelState>, private router: Router) {}

  
  

  ngOnInit(): void {
    this.loadParcels();
    this.form = new FormGroup({
      senderEmail: new FormControl(null, [
        Validators.required,
        Validators.email,
      ]),
      receiverEmail: new FormControl(null, [
        Validators.required,
        Validators.email,
      ]),
      trackNumber: new FormControl(null, [Validators.required]),
      weight: new FormControl(null, [Validators.required]),
      price: new FormControl(null, [Validators.required]),
      from: new FormControl(null, [Validators.required]),
      to: new FormControl(null, [Validators.required]),
      dispatchedDate: new FormControl(null, [Validators.required]),
    });
  }

  showAddParcel(condition: string) {
    if (condition === 'close') {
      this.openAddModal = false;
    } else {
      this.openAddModal = true;
    }
  }


  public handleSenderAddressChange(address: Address) {


    this.marker ={


      lat:address.geometry.location.lat(),

      lng:address.geometry.location.lng()
    }

    this.markerPositions.push(this.marker)
    // Do some stuff
   
}


public handleReceiverAddressChange(address: Address) {

  this.marker ={


    lat:address.geometry.location.lat(),

    lng:address.geometry.location.lng()
  }

  this.markerPositions.push(this.marker)

  console.log(this.markerPositions)
}

  loadParcels() {
    this.store.dispatch(Actions.LoadParcels());
  }

  //-0.31693553704056177 36.097950790026374

  addMarker(event: google.maps.MapMouseEvent | any) {
    this.markerPositions.push(event.latLng.toJSON());
  }

  updateStatus(
    
    id:number,senderEmail:string,receiverEmail:string,trackId:string,
    location:string,destination:string,dispatchedDate:string,weight:number,
    price:number,markers:string,
    status:number,deleted:number) {

  this.parcel={id,senderEmail,receiverEmail,trackId,location,destination,dispatchedDate,weight,price,markers,status:1,deleted}
    
  this.store.dispatch(Actions.updateParcel({updatedParcel:this.parcel}));
  this.store.dispatch(Actions.LoadParcels());


  }

  onSubmit() {
    this.parcel = {
      id: Math.floor(Math.random() * 10000000) + 1,

      senderEmail: this.form.value.senderEmail,

      receiverEmail: this.form.value.receiverEmail,

      trackId: this.form.value.trackNumber,

      weight: this.form.value.weight,

      price: this.form.value.price,
      location: this.form.value.from,
      destination: this.form.value.to,
      status: 0,
      deleted:0,
      dispatchedDate: this.form.value.dispatchedDate,
      markers: JSON.stringify(this.markerPositions),


    };

    this.store.dispatch(Actions.AddParcel({ newParcel: this.parcel }));
    this.store.dispatch(Actions.LoadParcels());

    this.form.reset();

    this.markerPositions = [];
  }


  deleteParcel(id:number){


    this.store.dispatch(Actions.DeleteParcel({id}))

    this.store.dispatch(Actions.LoadParcels());
  }

  Logout() {
    this.router.navigate(['/auth/login']);

    localStorage.clear()
  }
}

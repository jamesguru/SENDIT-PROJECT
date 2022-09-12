import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {faBarChart,faBars,faClose,faUser,faBell,faLocationPin} from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Parcel } from 'src/app/interfaces/Parcel';
import {getParcels,ParcelState} from 'src/app/Reducer/reducer/parcelsReducer';
import * as Actions from '../../Reducer/actions/parcelsActions';

@Component({
  selector: 'app-parcels',
  templateUrl: './parcels.component.html',
  styleUrls: ['./parcels.component.css'],
})
export class ParcelsComponent implements OnInit {
  center: google.maps.LatLngLiteral = {
    lat: -0.32984428475063204,
    lng: 36.097950790026374,
  };
  zoom = 4;
  markerOptions: google.maps.MarkerOptions = { draggable: false };
  markerPositions: google.maps.LatLngLiteral[] = [];

  faHambuger = faBars;
  faCancel = faClose;

  weight: number = 0;
  quote: number = 200;
  cost: number = 0;

  faUser = faUser;

  openMap: boolean = false;

  

  faBell = faBell;

  email = 'jameskagunga15@gmail.com';

  faMapLocation = faLocationPin;

  showMenuBar: boolean = false;
  selectedOption: string = '';
  p: number = 1;
  collection: any[] = [];

  parcels$ = this.store.select(getParcels);
  constructor(
    private store: Store<ParcelState>,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.loadParcels();

    console.log(this.selectedOption);
  }

  ShowMenuBar(condition: string) {
    if (condition === 'open') {
      this.showMenuBar = true;
    } else {
      this.showMenuBar = false;
    }
  }

  convert() {
    this.cost = this.weight * this.quote;

    
  }


  change(event:any){

    this.selectedOption = event.target.value;

    
  }
  loadParcels() {
    this.store.dispatch(Actions.LoadParcels());
  }

  showMap(locations: string) {


    this.markerPositions = JSON.parse(locations);

    this.openMap= true;


   
  }

  close(){

    this.openMap = false;
  }

  addMarker(event: google.maps.MapMouseEvent | any) {
    this.markerPositions.push(event.latLng.toJSON());

    for (let i = 0; i < this.markerPositions.length; i++) {
      console.log(JSON.stringify(this.markerPositions[i]));
    }
  }



  LogOut(){

    this.router.navigate([''])
  }
}

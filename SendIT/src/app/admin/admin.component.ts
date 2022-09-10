import { Component, OnInit } from '@angular/core';
import {faBell,faArrowRight,faCancel,faClose} from '@fortawesome/free-solid-svg-icons'
import { Store } from '@ngrx/store';
import {NgxPaginationModule} from 'ngx-pagination'; 
import * as Actions from '../Reducer/actions/parcelsActions';
import { getParcels } from '../Reducer/reducer/parcelsReducer';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  
  center: google.maps.LatLngLiteral = {lat: 1, lng: 38};
  zoom = 6;
  markerOptions: google.maps.MarkerOptions = {draggable: false};
  markerPositions: google.maps.LatLngLiteral[] = [
  
  ];
  
  parcels$ = this.store.select(getParcels);  
  
  p: number = 1;
  collection: any[] = []; 
  
  faBell=faBell;
  faArrowRight=faArrowRight;
  faCancel=faClose;
  openAddModal:boolean = false;
  filteredText:string ='';

  constructor(private store:Store) {

    
  
   }

  ngOnInit(): void {


    this.loadParcels();
  }


  

  showAddParcel(condition:string){

    if(condition === "close"){



      
      this.openAddModal = false;

    }else{


      this.openAddModal = true;

    }


  }


  loadParcels() {
    this.store.dispatch(Actions.LoadParcels());
  }
  


  //-0.31693553704056177 36.097950790026374

  addMarker(event: google.maps.MapMouseEvent | any) {
    this.markerPositions.push(event.latLng.toJSON());


    for(let i=0; i<this.markerPositions.length;i++){

      console.log( JSON.stringify(this.markerPositions))

     
    }
  }
}

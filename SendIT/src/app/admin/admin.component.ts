import { Component, OnInit } from '@angular/core';
import {faBell,faArrowRight,faCancel,faClose,faTrash} from '@fortawesome/free-solid-svg-icons'
import { Store } from '@ngrx/store';
import {NgxPaginationModule} from 'ngx-pagination'; 
import * as Actions from '../Reducer/actions/parcelsActions';
import { getParcels, ParcelState } from '../Reducer/reducer/parcelsReducer';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Parcel} from '../interfaces/Parcel'
import { Router } from '@angular/router';



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
  form!:FormGroup
  faBell=faBell;
  faArrowRight=faArrowRight;
  faCancel=faClose;
  faTrash=faTrash
  openAddModal:boolean = false;
  filteredText:string ='';
  parcel!:Parcel;

  constructor(private store:Store<ParcelState>, private router:Router) {


   }

  ngOnInit(): void {


    this.loadParcels();
    this.form = new FormGroup({
      senderEmail: new FormControl(null, [Validators.required,Validators.email]),
      receiverEmail: new FormControl(null, [Validators.required, Validators.email]),
      trackNumber: new FormControl(null, [Validators.required]),
      weight: new FormControl(null, [Validators.required]),
      price: new FormControl(null, [Validators.required]),
     from: new FormControl(null, [Validators.required]),
     to: new FormControl(null, [Validators.required]),
     dispatchedDate: new FormControl(null, [Validators.required]),
    });
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


    
  }

  updateStatus(id:number){


   this.store.dispatch(Actions.updateParcel({id}))

  }



  onSubmit(){

      this.parcel ={

        id:727,
  
        senderEmail:this.form.value.senderEmail,
  
        receiverEmail:this.form.value.receiverEmail,
  
        trackNumber:this.form.value.trackNumber,
  
        weight:this.form.value.weight,
  
        price:this.form.value.price,
  
        from:this.form.value.from,
  
        to:this.form.value.to,
  
        status:0,
        dispatchedDate:this.form.value.dispatchedDate,
        locations:JSON.stringify(this.markerPositions)
      }
     
      this.store.dispatch(Actions.AddParcel({newParcel: this.parcel}))
      this.store.dispatch(Actions.LoadParcels())

      this.form.reset()

      this.markerPositions = [];
     




    }


    Logout(){

      this.router.navigate([''])


    }

    
}

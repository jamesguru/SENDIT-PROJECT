import { Component, OnInit } from '@angular/core';
import {faBarChart, faBars, faClose,faUser,faBell, faLocationPin} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-parcels',
  templateUrl: './parcels.component.html',
  styleUrls: ['./parcels.component.css']
})
export class ParcelsComponent implements OnInit {


  center: google.maps.LatLngLiteral = {lat: -0.32984428475063204, lng: 36.097950790026374};
  zoom = 4;
  markerOptions: google.maps.MarkerOptions = {draggable: false};
  markerPositions: google.maps.LatLngLiteral[] = [
    
    
    {


    lat:-0.32984428475063204,
  
    lng: 36.097950790026374,
  
  
   },


   {


    lat: -0.3803804260223133,

    lng: 35.945515487292
  
  
   }
  
  
  
  
  
  ];
  

faHambuger = faBars;
faCancel=faClose;

weight:number=0;

cost:number=0;

faUser = faUser;

openMap:boolean=false;

quote:number=200;

faBell = faBell;

faMapLocation= faLocationPin;

showMenuBar:boolean = false;

p: number = 1;
  collection: any[] = []; 


  constructor() { }

  ngOnInit(): void {
  }


  ShowMenuBar(condition:string){

    if(condition === 'open'){

      this.showMenuBar=true;

    }else{


      this.showMenuBar=false;
    }

    
  }


  convert(){

    this.cost = this.weight * this.quote;

    
  }


  


  showMap(condition:string){

    if(condition === "close"){

      this.openMap=false;

      
    }else{

      this.openMap=true;
    }
  }


  addMarker(event: google.maps.MapMouseEvent | any) {
    this.markerPositions.push(event.latLng.toJSON());


    for(let i=0; i<this.markerPositions.length;i++){

      console.log( JSON.stringify(this.markerPositions[i]))

     
    }
  }

}

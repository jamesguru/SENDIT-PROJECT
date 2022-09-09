import { Component, OnInit } from '@angular/core';
import {faBell,faArrowRight,faCancel,faClose} from '@fortawesome/free-solid-svg-icons'
import {NgxPaginationModule} from 'ngx-pagination'; 


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  
  center: google.maps.LatLngLiteral = {lat: 1, lng: 38};
  zoom = 8;
  markerOptions: google.maps.MarkerOptions = {draggable: false};
  markerPositions: google.maps.LatLngLiteral[] = [
    
    
    
  
  
  
  
  ];
  
 
  p: number = 1;
  collection: any[] = []; 
  
  faBell=faBell;
  faArrowRight=faArrowRight;
  faCancel=faClose;
  openAddModal:boolean = false;

  constructor() {


    


   }

  ngOnInit(): void {
  }


  

  showAddParcel(condition:string){

    if(condition === "close"){



      
      this.openAddModal = false;

    }else{


      this.openAddModal = true;

    }


  }



  


  //-0.31693553704056177 36.097950790026374

  addMarker(event: google.maps.MapMouseEvent | any) {
    this.markerPositions.push(event.latLng.toJSON());


    for(let i=0; i<this.markerPositions.length;i++){

      console.log( JSON.stringify(this.markerPositions))

     
    }
  }
}

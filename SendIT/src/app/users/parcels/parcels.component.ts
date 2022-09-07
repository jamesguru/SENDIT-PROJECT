import { Component, OnInit } from '@angular/core';
import {faBarChart, faBars, faClose,faUser,faBell, faLocationPin} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-parcels',
  templateUrl: './parcels.component.html',
  styleUrls: ['./parcels.component.css']
})
export class ParcelsComponent implements OnInit {


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

}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {faBarChart,faBars,faClose,faUser,faBell,faLocationPin} from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Parcel } from 'src/app/interfaces/Parcel';
import {Notification} from 'src/app/interfaces/Notification'
import {getParcels,ParcelState} from 'src/app/Reducer/reducer/parcelsReducer';
import { NotificationService } from 'src/app/Services/notification.service';
import * as Actions from '../../Reducer/actions/parcelsActions';
import { EmailValidator } from '@angular/forms';


@Component({
  selector: 'app-parcels',
  templateUrl: './parcels.component.html',
  styleUrls: ['./parcels.component.css'],
})
export class ParcelsComponent implements OnInit,OnDestroy {
  center: google.maps.LatLngLiteral = {
    lat: -0.32984428475063204,
    lng: 36.097950790026374,
  };
  zoom = 6;
  markerOptions: google.maps.MarkerOptions = { draggable: false };
  markerPositions: google.maps.LatLngLiteral[] = [];

  faHambuger = faBars;
  faCancel = faClose;


  read:boolean =true;

  weight: number = 0;
  quote: number = 200;
  cost: number = 0;

  faUser = faUser;

  openMap: boolean = false;

  notifications$!:Observable<Notification[]>;

  faBell = faBell;

  user = JSON.parse(localStorage.getItem('user') as string);

  faMapLocation = faLocationPin;

  sub!:Subscription;

  showMenuBar: boolean = false;
  selectedOption: string = '';
  p: number = 1;
  collection: any[] = [];

  location!:string;
  destination!:string;
  price!:number;
  parcelweight!:number;
  receiver!:string;
  sender!:string;
  status!:number;

  parcels$ = this.store.select(getParcels);
  constructor(
    private store: Store<ParcelState>,
    private router:Router,
    private notificationService:NotificationService
  ) {}

  ngOnInit(): void {
    this.loadParcels();

    this.loadNotifications();
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

  markRead(){

    this.read = false;
  }
  loadNotifications(){



    this.notifications$ = this.notificationService.getParcels();


  }


  deleteNotification(id:number){


   this.sub=this.notificationService.delete(id).subscribe(val=>{

      console.log(val)


      this.loadNotifications()
    })

  }

  change(event:any){

    this.selectedOption = event.target.value;

    
  }
  loadParcels() {
    this.store.dispatch(Actions.getUserParcels({email:this.user.email}));
  }

  
  showMap(locations:string,location:string,destination:string,price:number,weight:number,receiver:string,sender:string,status:number) {


    this.markerPositions = JSON.parse(locations);

    this.openMap= true;

  this.location=location;
  this.destination=destination;
  this.price=price;
  this.parcelweight=weight;
  this.receiver=receiver;
  this.sender=sender;
  this.status=status;


   
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

    this.router.navigate(['/auth/login']);

    localStorage.clear()
  }


  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }
}

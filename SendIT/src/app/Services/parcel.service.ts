import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Parcel} from '../interfaces/Parcel'
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ParcelService {
  baseUrl: string = environment.baseUrl
  orders$!:Observable<Parcel[]>
  // baseUrl = environment.baseUrl
  
  constructor(private http: HttpClient) { }
  

  getParcels() : Observable <Parcel[]>{


    
    return this.http.get<Parcel[]>("http://localhost:8000/api/parcels")
  }
  getParcelsDetails(id:number): Observable<Parcel[]>{
    return this.http.get<Parcel[]>(`${this.baseUrl}/parcels/${id}`)
  }

  getParcelsForUser(email:string) : Observable <Parcel[]>{


    
    return this.http.post<Parcel[]>("http://localhost:8000/api/parcels/userparcels",{email})
  }
  
  deleteParcel(id:number): Observable <{message:string}>{
    return this.http.put<{message:string}>(`http://localhost:8000/api/parcels/softdelete/${id}`,{'deleted':1})
  }
  createParcel(parcel:Parcel):Observable<{message:string}>{
    return this.http.post<{message:string}>("http://localhost:8000/api/parcels", parcel)
  }

  updateParcels(parcel:Parcel){

     return this.http.put<{message:string}>(`http://localhost:8000/api/parcels/${parcel.id}`,
     {senderEmail:parcel.senderEmail,
      receiverEmail:parcel.receiverEmail,
      trackId:parcel.trackId,
      location:parcel.location,
     destination:parcel.destination,
     dispatchedDate:parcel.dispatchedDate,
     weight:parcel.weight,
     price:parcel.price,
     markers:parcel.markers,
     status:parcel.status,
     deleted:parcel.deleted})
  }
}
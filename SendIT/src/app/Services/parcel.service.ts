import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Parcel} from '../interfaces/Parcel'


@Injectable({
  providedIn: 'root'
})
export class ParcelService {
  baseUrl: string = "http://localhost:5000"
  orders$!:Observable<Parcel[]>
  
  constructor(private http: HttpClient) { }
  

  getParcels() : Observable <Parcel[]>{


    console.log('you got here')
    return this.http.get<Parcel[]>(`${this.baseUrl}/parcels`)
  }
  getParcelsDetails(id:number): Observable<Parcel[]>{
    return this.http.get<Parcel[]>(`${this.baseUrl}/parcels/${id}`)
  }
  
  deleteParcel(id:number): Observable <{message:string}>{
    return this.http.delete<{message:string}>(`${this.baseUrl}/parcels/${id}`)
  }
  createParcel(parcel:Parcel):Observable<{message:string}>{
    return this.http.post<{message:string}>(`${this.baseUrl}/parcels`, parcel)
  }

  updateParcels(id:number){

    console.log(id)
      return this.http.put<{message:string}>(`${this.baseUrl}/parcels/${id}`,{status: 1})
  }
}
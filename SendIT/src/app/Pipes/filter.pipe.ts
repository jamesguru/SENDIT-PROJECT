import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})
export class FilterPipe implements PipeTransform {

  transform(value:any, name:string): any{
    if(value.length===0 || name===''){
      name = name.toLowerCase();
      return value
    }
    const parcels:any=[]
    for (let parcel of value){
   if (parcel.name.toLowerCase().indexOf(name)!=-1){
    parcels.push(parcel)
   }
  }
  return parcels
}

}
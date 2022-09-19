import { Pipe, PipeTransform } from '@angular/core';
import { Parcel } from '../interfaces/Parcel';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value:Parcel[], filterText:string): Parcel[]{
    if(value.length=== 0 || filterText ===''){
      return value
    }
    const filtered:Parcel[]=[]
    for(let item of value){
      if(item.trackId.toLocaleLowerCase().indexOf(filterText.toLocaleLowerCase())!==-1){
        filtered.push(item)
      }
    }
    return filtered
  }
}
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value:any, filterText:string): any{
    if(value.length=== 0 || filterText ===''){
      return value
    }
    const filtered:any=[]
    for(let item of value){
      if(item.senderName.toLocaleLowerCase().indexOf(filterText.toLocaleLowerCase())!==-1){
        filtered.push(item)
      }
    }
    return filtered
  }
}
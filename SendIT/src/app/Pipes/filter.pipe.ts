import { Pipe, PipeTransform } from '@angular/core';
import { Parcel } from '../interfaces/Parcel';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: Parcel[], selectedOption: string): Parcel[] {
    if (value.length === 0 || selectedOption === '') {

      
      return value;
    }
    const myParcel: Parcel[] = [];
    const otherParcel: Parcel[] = [];


    const email = 'jameskagunga15@gmail.com';

    if (selectedOption === 'to') {
  
      for (let item of value) {
        if (
          item.receiverEmail
            .toLocaleLowerCase()
            .indexOf(email.toLocaleLowerCase()) !== -1
        ) {
          myParcel.push(item);
        }
      }

      

      return myParcel;
    } else if(selectedOption === "from") {
      for (let item of value) {
        if (
          item.senderEmail
            .toLocaleLowerCase()
            .indexOf(email.toLocaleLowerCase()) !== -1
        ) {
          otherParcel.push(item);
        }
      }

     
      return otherParcel;
    }

    return value
  }
}

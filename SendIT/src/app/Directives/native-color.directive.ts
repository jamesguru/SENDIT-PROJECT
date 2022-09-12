import { Directive } from '@angular/core';
import {ElementRef} from '@angular/core'

@Directive({
  selector: '[appNativeColor]'
})
export class NativeColorDirective {

  constructor(private el:ElementRef) {


    el.nativeElement.style.color = "#ffff";

    el.nativeElement.style.backgroundColor="#82d78a";

    
   }

}

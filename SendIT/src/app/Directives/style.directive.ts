import { Directive, ElementRef, HostBinding, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective implements OnInit{
  @Input() backgroundColor: string = '';
  @HostBinding('style.backgroundColor') addbackgroundColor!: string;
  constructor(private element: ElementRef, private renderer: Renderer2) { }
  ngOnInit(): void {
    this.addbackgroundColor = this.backgroundColor;
  }

}
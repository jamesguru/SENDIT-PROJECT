import { Component, Input, OnInit } from '@angular/core';
import {faClose} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {


  @Input() message!:string;

  faCancel=faClose;

  constructor() { }

  ngOnInit(): void {
  }

}

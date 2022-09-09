import { Component, Input, OnInit } from '@angular/core';
import {faClose} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

@Input() message!:string;
faCancel=faClose;

  constructor() { }

  ngOnInit(): void {
  }

}

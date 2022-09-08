import { Component, OnInit } from '@angular/core';
import {faBell,faArrowRight,faCancel,faClose} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  faBell=faBell;
  faArrowRight=faArrowRight;
  faCancel=faClose;
  openAddModal:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }


  showAddParcel(condition:string){

    if(condition === "close"){


      this.openAddModal = false;

    }else{


      this.openAddModal = true;

    }


  }
}

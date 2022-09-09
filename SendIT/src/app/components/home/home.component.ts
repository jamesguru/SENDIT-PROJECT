import { Component, OnInit } from '@angular/core';


import {faPhone,faArrowRight, } from '@fortawesome/free-solid-svg-icons';

import { NgxSpinnerService } from "ngx-spinner";
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


faPhone = faPhone;
faRightArrow = faArrowRight;


  constructor(private router:Router,private spinner: NgxSpinnerService) { }

  ngOnInit(): void {


    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
  }




  navigateToAbout(){


    this.router.navigate(['about'])

  }

}

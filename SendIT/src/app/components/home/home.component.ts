import { Component, OnInit } from '@angular/core';


import {faPhone,faArrowRight, } from '@fortawesome/free-solid-svg-icons';


import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


faPhone = faPhone;
faRightArrow = faArrowRight;


  constructor(private router:Router) { }

  ngOnInit(): void {
  }




  navigateToAbout(){


    this.router.navigate(['about'])

  }

}

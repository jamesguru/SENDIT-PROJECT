import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('form') form!:NgForm; 
  router!:Router;


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){


    console.log(this.form);


    this.form.setValue({

      email:"ndungu@gmail.com",

      password:'1234567899'
    })

    // this.form.reset()


    this.router.navigate(['reactiveforms'])
    

  }
  

}

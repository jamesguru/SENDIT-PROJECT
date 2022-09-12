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
  


  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){


    this.router.navigate(['/parcels'])
    this.form.reset()

  }
  

}

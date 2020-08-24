import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-verification-comp',
  templateUrl: './verification-comp.component.html',
  styleUrls: ['./verification-comp.component.css']
})
export class VerificationCompComponent implements OnInit {

  constructor() { }
   
  title:string="Verification Form"
  city:string
  fullname:string
  email:string
  panNumber:string
  mobile:string
  otp:number

 

  ngOnInit() {
    
  }
  
  onFormSubmit(verificationform:NgForm){
    console.log(verificationform.value)
  }

  
  
}

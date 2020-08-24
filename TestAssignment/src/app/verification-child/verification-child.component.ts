import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';
import { otpService } from './otp.service';


@Component({
  selector: 'app-verification-child',
  templateUrl: './verification-child.component.html',
  styleUrls: ['./verification-child.component.css'],
  providers: [otpService]
})



export class VerificationChildComponent implements OnChanges {

  constructor(private otpService: otpService) {

  }

  @Input() mobile: string;
  @Input() fullname: string;
  @Input() city: string;
  @Input() panNumber: string;
  @Input() email: string;
  

ngOnInit() {
  let data1 = 
  { 
    "panNumber": "", 
    "city": "", 
    "fullname": "", 
    "email": "",
    "mobile": ""
  };
this.otpService.getOTP(data1).subscribe(res1 => { console.log(res1) });
  
}
  otp: number;
  allmobileChangeLogs: string[] = [];
  allfullnameChangeLogs: string[] = [];
  isSuccessGetOtp: boolean = false;
  isSuccessVerifyOtp: boolean = false;
  enableResendLink: boolean = false;
  currentFullName: string = '';
  currentMobile: string = '';
  currentPanNumber: string = '';
  currentEmail: string = '';
  currentCity: string = '';
  changeCounter: number = 0;
  
  
  ngOnChanges(changes: SimpleChanges) {

    for (let propName in changes) {
      let change = changes[propName];

      let curVal = JSON.stringify(change.currentValue);
      let prevVal = JSON.stringify(change.previousValue);
      let changeLog = `${propName}: currentValue = ${curVal}, previousValue = ${prevVal}`;
      
      console.log(changeLog)
      switch(propName){
        case 'fullname' : 
          this.currentFullName = change.currentValue;
        break;
        case 'city' : 
          this.currentCity  = change.currentValue;
        break;
        case 'mobile' : 
          this.currentMobile = change.currentValue;
          if(this.isValidForm(change.currentValue)) {
             this.getOTP();
          }
          else{
            this.isSuccessGetOtp = false;
          }
        break;
        case 'panNumber' :
          this.currentPanNumber = change.currentValue; 
        break;
        case 'email' : 
          this.currentEmail = change.currentValue;
        break;
        default : break;
      }
      
    }

  }
  
  // Make service call
  response:any;
  getOTP() {
    let data = 
            { 
              "panNumber": this.currentPanNumber, 
              "city": this.currentCity, 
              "fullname": this.currentFullName, 
              "email": this.currentEmail,
              "mobile": this.currentMobile
            };
    this.otpService.getOTP(data).subscribe(res1 => { 
        this.response=res1;
        console.log(this.response)
        console.log(this.response.statusCode)
        if(this.response != undefined && this.response.status != undefined && this.response.statusCode !=undefined && this.response.statusCode == 200)
        {
          this.enableResendLink = false;
          this.setDelay();
          this.isSuccessGetOtp=true;
          
        }
       
    }, err1 => { this.response = err1 });
   // 
    
  }

  private setDelay() {
      let wait = 180000;
      this.changeCounter += 1;
      setTimeout(() => {
          console.log("Waited ", wait);
          this.enableResendLink = true;
      }, wait);
      
  }

  public verifyOTP(){
    if(this.isSuccessGetOtp){
      let data ={"otp": this.otp, "mobile": this.currentMobile};
      this.otpService.verifyOTP(data).subscribe(res1 => { this.response = res1 }, err1 => { this.response = err1 });
      if(this.response.status != undefined &&  this.response.statusCode == 200)
      {
        
        this.isSuccessVerifyOtp = true;
        return this.response.status;
      }
        
    }
    return false;
  }

  private isValidForm(mobileNumber :string){
    
    if(mobileNumber != undefined && mobileNumber.length == 10 && 
        this.currentFullName != undefined && this.currentFullName.length >=1 && this.currentFullName.length <=140 &&
        this.currentCity != undefined && this.currentCity.length >=1 &&
        this.currentPanNumber != undefined && this.currentPanNumber.length <= 10 &&
        this.currentEmail != undefined && this.currentEmail.length <= 255)
      return true;
      
    return false;
  }

  

}


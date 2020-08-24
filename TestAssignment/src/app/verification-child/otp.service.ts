import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
@Injectable()
export class otpService {
    constructor(private http: HttpClient) {

    }

    public getOTP(formModel: any) {
        let url = 'http://lab.thinkoverit.com/api/getOTP.php'
        return this.http.post(url, formModel);
    }

    public verifyOTP(formModel: any) {
        let url = 'http://lab.thinkoverit.com/api/verifyOTP.php'
        return this.http.post(url, formModel);
    }

   
}
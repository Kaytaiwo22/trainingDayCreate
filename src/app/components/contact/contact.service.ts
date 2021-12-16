import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) {}

  sendEmail(requestBodyData: object) {
    return this.http.post(
        'https://api2.createdigitalsolutions.com/websites/60dafcc14b162471912edc48/emails/inbound',
        requestBodyData,
        { observe: 'response' }
    );
  }

}

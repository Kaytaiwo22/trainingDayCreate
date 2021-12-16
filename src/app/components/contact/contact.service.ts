import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) {}

  sendEmail(requestBodyData: object) {
    return this.http.post('https://api.createdigitalsolutions.com/api/v1/email', requestBodyData, { observe: 'response' });
  }

}

import {Component, Inject} from '@angular/core';
import {ContactService} from "./contact.service";
import {AosToken} from "../animate-on-scroll/aos";

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  public fullName: string;
  public phoneNo: string;
  public fullNameEmail: string;
  public emailAddress: string;
  public message: string;
  public hideEmailFields = false;

  constructor(@Inject(AosToken) aos, public contactService: ContactService) {
    aos.init();
  }

  submitContactRequest() {
    this.hideEmailFields = true;

    this.contactService.sendEmail({
      fullName: this.fullNameEmail,
      phone: this.phoneNo,
      email: this.emailAddress,
      message: this.message,
    }).subscribe();
  }

}

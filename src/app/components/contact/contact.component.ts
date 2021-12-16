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
  public hideEmailFields: boolean = false;
  public hidePhoneFields: boolean = false;

  constructor(@Inject(AosToken) aos, public contactService: ContactService) {
    aos.init();
  }

  submitContactRequest(type) {
    if (type === 'Callback Request') {
      this.hidePhoneFields = true;
    } else {
      this.hideEmailFields = true;
    }

    this.contactService.sendEmail({
      subject: type,
      fullName: type === 'Callback Request' ? this.fullName : this.fullNameEmail,
      phone: this.phoneNo,
      email: this.emailAddress,
      message: this.message,
      type: 'contact-magical-treats'
    }).subscribe();
  }

  openLiveChat() {
    window.LC_API.open_chat_window();
  }

}

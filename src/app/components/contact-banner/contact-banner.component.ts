import { Component, OnInit } from '@angular/core';
import {ContactService} from "../contact/contact.service";

@Component({
  selector: 'app-contact-banner',
  templateUrl: './contact-banner.component.html',
  styleUrls: ['./contact-banner.component.css'],
  inputs: [],
})
export class ContactBannerComponent implements OnInit {

  public fullName: string;
  public phoneNo: string;
  public hideFields: boolean;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
  }

  submitContactRequest() {
    this.hideFields = true;

    this.contactService.sendEmail({
      subject: 'Contact Banner',
      fullName: this.fullName,
      phone: this.phoneNo,
      type: 'contact'
    }).subscribe();
  }

}

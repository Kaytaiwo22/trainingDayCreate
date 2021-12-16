import {Component, Output, EventEmitter, Input} from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ContactService } from "../contact/contact.service";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: "app-calendar-modal",
  templateUrl: "./calendar-modal.component.html",
  styleUrls: ["./calendar-modal.component.scss"],
})
export class CalendarModalComponent {
  dates = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
  ];
  months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  times = ["11am-1pm", "1pm-3pm", "3pm-6pm", "6pm-9pm"];
  bookingForm: FormGroup;
  public userDetails: any;
  sleepOption: string;
  public email: FormControl = new FormControl('', {
    validators: Validators.compose([Validators.required, Validators.pattern(/^.*$/)]),
  });
  public firstName: FormControl = new FormControl('', {
    validators: Validators.compose([Validators.required, Validators.pattern(/^.*$/)]),
  });
  public lastName: FormControl = new FormControl('', {
    validators: Validators.compose([Validators.required, Validators.pattern(/^.*$/)]),
  });
  public password: FormControl = new FormControl('', {
    validators: Validators.compose([Validators.required, Validators.pattern(/^.*$/)]),
  });
  public mailingAllowed: FormControl = new FormControl('', {
    validators: Validators.compose([Validators.required, Validators.pattern(/^.*$/)]),
  });
  public dateValue: FormControl = new FormControl("", {
    validators: Validators.compose([
      Validators.required,
      Validators.pattern(/^.*$/),
    ]),
  });
  public monthValue: FormControl = new FormControl("", {
    validators: Validators.compose([
      Validators.required,
      Validators.pattern(/^.*$/),
    ]),
  });
  public timeValue: FormControl = new FormControl("", {
    validators: Validators.compose([
      Validators.required,
      Validators.pattern(/^.*$/),
    ]),
  });
  public phoneNumber: FormControl = new FormControl("", {
    validators: Validators.compose([
      Validators.required,
      Validators.pattern(/^.*$/),
    ]),
  });
  isSuccessful : boolean;
  selectedOption: string = '';

  @Output() modalClose: EventEmitter<void> = new EventEmitter();
  constructor(
    public contactService: ContactService,
    private http: HttpClient,
    private formBuilder: FormBuilder,
    public router: Router
  ) {
    this.bookingForm = this.formBuilder.group({
      dateValue: this.dateValue,
      monthValue: this.monthValue,
      timeValue: this.timeValue
    });
    this.getUserDetails();
  }

  getUserDetails() {
    this.http
      .get(
        "https://api2.createdigitalsolutions.com/clientAccount/60dafcc14b162471912edc48"
      )
      .subscribe(
        (userDetails: { result: {} }) => {
          this.userDetails = userDetails.result;
          this.sleepOption = this.userDetails.roles.find(
            (role) => role.type === "SleepProgram2"
          )
            ? "Sleep Program 2"
            : "Sleep Program 1";
          this.email.setValue(this.userDetails.email);
          this.firstName.setValue(this.userDetails.firstName);
          this.lastName.setValue(this.userDetails.lastName);
          this.phoneNumber.setValue(this.userDetails.phoneNumber);
          this.mailingAllowed.setValue(this.userDetails.mailingAllowed);
        },
        () => {
          this.router.navigate(["/"]);
        }
      );
  }

  submitContactRequest(type) {
    if(!this.isSuccessful){
      this.contactService.sendEmail({
        email: this.email.value,
        fullName: type === 'Video Meeting Booking from' ? this.firstName.value : this.lastName.value,
        phone: this.phoneNumber.value,
        message: 'Booking for Video Meeting. Client has purchased bookable product. The have selected this date: ' + this.dateValue.value +  '/' + this.monthValue.valueOf() +  ' '+ 'Between: ' + this.timeValue.valueOf()
      }).subscribe();
    }
    this.isSuccessful = true;

  }

  selectChangeHandler (event: any) {
    this.selectedOption = event.target.value;
    console.log('selected', this.selectedOption);
  }

  public modalClosed() {
    this.modalClose.emit();
  }
}

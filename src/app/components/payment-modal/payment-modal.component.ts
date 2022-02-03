import { formatDate } from "@angular/common";
import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  SimpleChange,
} from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-payment-modal",
  templateUrl: "./payment-modal.component.html",
  styleUrls: ["./payment-modal.component.css"],
})
export class PaymentModalComponent implements OnInit, OnChanges {
  @Input() form: {
    title: string;
    length: string;
    type: string;
    required: boolean;
  }[] = [];
  public cardNumber: FormControl = new FormControl("", {
    validators: Validators.compose([
      Validators.required,
      Validators.pattern(/^.*$/),
    ]),
  });
  public cvv: FormControl = new FormControl("", {
    validators: Validators.compose([
      Validators.required,
      Validators.pattern(/^.*$/),
    ]),
  });
  public expiryDate: FormControl = new FormControl("", {
    validators: Validators.compose([
      Validators.required,
      Validators.pattern(/^.*$/),
    ]),
  });
  public cardOwnerName: FormControl = new FormControl("", {
    validators: Validators.compose([
      Validators.required,
      Validators.pattern(/^.*$/),
    ]),
  });
  public postCode: FormControl = new FormControl("", {
    validators: Validators.compose([
      Validators.required,
      Validators.pattern(/^.*$/),
    ]),
  });
  public registerForm: FormGroup;
  public error?: any;

  @Output() formResponse = new EventEmitter<any>();
  public thisform: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      cardNumber: this.cardNumber,
      cvv: this.cvv,
      expiryDate: this.expiryDate,
      cardOwnerName: this.cardOwnerName,
      postCode: this.postCode,
    });
  }

  inputChanged(value: any) {
    this.formResponse.emit(value);
  }

  ngOnInit(): void {
    console.log(this.form);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.thisform) {
      const MyFormChanges: SimpleChange = changes.thisform;
      // To Check current values
      console.log(MyFormChanges.currentValue);

      // To Check previous values
      console.log(MyFormChanges.previousValue);
    }

    // // To Set Current Values to fields using controls
    // this.formName.controls["email"].setValue(MyFormChanges.currentValue.email);
  }

  userForm = new FormGroup({
    title: new FormControl(),
    length: new FormControl("20"),
    type: new FormControl(),
    requried: new FormControl(),
    placeholder: new FormControl(),
  });

  onFormSubmit(): void {
    console.log("Title:" + this.userForm.get("title").value);
  }
}

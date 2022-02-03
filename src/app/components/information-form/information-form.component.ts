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
  selector: "app-information-form",
  templateUrl: "./information-form.component.html",
  styleUrls: ["./information-form.component.css"],
})
export class InformationFormComponent implements OnInit, OnChanges {
  @Input() form: {
    title: string;
    length: string;
    type: string;
    required: boolean;
  }[] = [];
  public fullName: FormControl = new FormControl("", {
    validators: Validators.compose([
      Validators.required,
      Validators.pattern(/^.*$/),
    ]),
  });
  public emailAddress: FormControl = new FormControl("", {
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
  public registerForm: FormGroup;
  public error?: any;

  @Output() formResponse = new EventEmitter<any>();
  public thisform: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      fullName: this.fullName,
      emailAddress: this.emailAddress,
      phoneNumber: this.phoneNumber,
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

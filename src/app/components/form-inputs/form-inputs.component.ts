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
  selector: "app-form-inputs",
  templateUrl: "./form-inputs.component.html",
  styleUrls: ["./form-inputs.component.css"],
})
export class FormInputsComponent implements OnInit, OnChanges {
  @Input() form: {
    title: string;
    length: string;
    type: string;
    required: boolean;
  }[] = [];
  public addressNickname: FormControl = new FormControl("", {
    validators: Validators.compose([
      Validators.required,
      Validators.pattern(/^.*$/),
    ]),
  });
  public addressLine1: FormControl = new FormControl("", {
    validators: Validators.compose([
      Validators.required,
      Validators.pattern(/^.*$/),
    ]),
  });
  public addressLine2: FormControl = new FormControl("", {
    validators: Validators.compose([
      Validators.required,
      Validators.pattern(/^.*$/),
    ]),
  });
  public addressLine3: FormControl = new FormControl("", {
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
      addressNickname: this.addressNickname,
      addressLine1: this.addressLine1,
      addressLine2: this.addressLine2,
      addressLine3: this.addressLine3,
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

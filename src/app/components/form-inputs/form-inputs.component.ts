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
import { FormControl, FormGroup } from "@angular/forms";

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

  public formArray = [];

  @Output() formResponse = new EventEmitter<any>();
  public thisform: FormGroup;
  constructor() {}

  inputChanged(value: any) {
    this.formResponse.emit(value);
  }

  ngOnInit(): void {
    console.log(this.form);
    this.formArray = this.form;
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

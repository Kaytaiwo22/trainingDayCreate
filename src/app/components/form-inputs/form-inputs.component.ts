import { formatDate } from "@angular/common";
import { Component, OnInit, Input, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";
@Component({
  selector: "app-form-inputs",
  templateUrl: "./form-inputs.component.html",
  styleUrls: ["./form-inputs.component.css"],
})
export class FormInputsComponent implements OnInit {
  @Input() form: {
    title: string;
    length: string;
    type: string;
    required: boolean;
  }[] = [];

  public formArray = [];

  @Output() newFormEvent = new EventEmitter<string>();

  addNewForm(value: string) {
    this.newFormEvent.emit(value);
  }

  constructor() {}

  ngOnInit(): void {
    console.log(this.form);
    this.formArray = this.form;
  }
}

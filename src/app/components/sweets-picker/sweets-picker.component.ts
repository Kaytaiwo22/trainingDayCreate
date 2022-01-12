import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-sweets-picker",
  templateUrl: "./sweets-picker.component.html",
  styleUrls: ["./sweets-picker.component.css"],
})
export class SweetsPickerComponent {
  @Input() images: {
    url: string;
    description: string;
  }[] = [];

  public counter: number = 0;

  constructor() {}

  addCounter() {
    this.counter = this.counter + 1;
  }
  removeCounter() {
    if (this.counter > 0) {
      this.counter = this.counter - 1;
    }
  }
}

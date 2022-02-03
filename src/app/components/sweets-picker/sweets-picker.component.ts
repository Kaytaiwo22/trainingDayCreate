import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-sweets-picker",
  templateUrl: "./sweets-picker.component.html",
  styleUrls: ["./sweets-picker.component.css"],
})
export class SweetsPickerComponent {
  @Input() limit: number;
  @Input() maxBagChoices: number;
  @Input() images: {
    url: string;
    description: string;
  }[] = [];

  public counter: number = 0;
  // public maxBagChoices: number;

  constructor() {}

  addCounter() {
    this.counter = this.counter + 1;
  }
  removeCounter() {
    if (this.counter > 0) {
      this.counter = this.counter - 1;
    }
  }

  selectOption(bag: string) {
    if (bag === "500") {
      this.maxBagChoices = 5;
    } else if (bag === "1000") {
      this.maxBagChoices = 10;
    } else if (bag === "2000") {
      this.maxBagChoices = 20;
    }
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-select-sweet",
  templateUrl: "./select-sweet.component.html",
  styleUrls: ["./select-sweet.component.css"],
})
export class SelectSweetComponent {
  @Input() image: {
    url: string;
    description: string;
  };

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

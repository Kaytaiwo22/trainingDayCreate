import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-sweet-counter",
  templateUrl: "./sweet-counter.component.html",
  styleUrls: ["./sweet-counter.component.css"],
})
export class SweetCounterComponent {
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

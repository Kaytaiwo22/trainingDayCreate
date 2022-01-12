import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-sweets-picker",
  templateUrl: "./sweets-picker.component.html",
  styleUrls: ["./sweets-picker.component.css"],
})
export class SweetsPickerComponent {
  public images = [
    { url: "../assets/images/sweets-jar1.png", description: "gummy sweet" },
    { url: "../assets/images/sweets-jar1.png", description: "gummy sweet" },
    { url: "../assets/images/sweets-jar1.png", description: "gummy sweet" },
    { url: "../assets/images/sweets-jar1.png", description: "gummy sweet" },
    { url: "../assets/images/sweets-jar1.png", description: "gummy sweet" },
  ];

  constructor() {}

  ngOnInit() {}
  quantity: number = 1;
  i = 1;
  plus() {
    if (this.i != 20) {
      this.i++;
      this.quantity = this.i;
    }
  }
  minus() {
    if (this.i != 1) {
      this.i--;
      this.quantity = this.i;
    }
  }
}

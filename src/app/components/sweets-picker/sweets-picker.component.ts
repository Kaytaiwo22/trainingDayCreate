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
  ];

  constructor() {}
}

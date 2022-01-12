import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";

@Component({
  selector: "app-sweets-picker",
  templateUrl: "./sweets-picker.component.html",
  styleUrls: ["./sweets-picker.component.css"],
})
export class SweetsPickerComponent {
<<<<<<< HEAD
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
=======
  @Input() images: {
    url: string;
    description: string;
  }[] = [];

  public counter: number = 0;

  constructor() {}

  addCounter(){
    this.counter = this.counter + 1;
  }
  removeCounter(){
    if (this.counter > 0)
    {
      this.counter = this.counter - 1;
>>>>>>> 9f24db5d68b015cbdb6a6f6f53fb02f644f93b01
    }
  }
}

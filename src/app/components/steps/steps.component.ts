import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-steps",
  templateUrl: "./steps.component.html",
  styleUrls: ["./steps.component.css"],
})
export class StepsComponent implements OnInit {
  selectedSize: string;
  public currentStep: boolean;
  counter = 0;
  public steps = [
    { title: "Select Bag" },
    {
      title: "Choose Sweets",
      description: "Select up to 10 items for your bag",
    },
    // {
    //   title: "Delivery Address",
    //   // description: "It will be on its way soon!",
    // },
    // {
    //   title: "Enter your information",
    // },
    // {
    //   title: "Preview Order",
    // },
    // {
    //   title: "Payment",
    // },
  ];

  @Output() modalClose: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  nextSteps() {
    this.counter++;
  }

  selectOption(value) {
    this.selectedSize = value;
  }

  public modalClosed() {
    this.modalClose.emit();
  }
}

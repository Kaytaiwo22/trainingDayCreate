import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-steps",
  templateUrl: "./steps.component.html",
  styleUrls: ["./steps.component.css"],
})
export class StepsComponent implements OnInit {
  selectedSize: string;
  sweetsLimit: number;
  public currentStep: boolean;
  counter = 0;
  public form = [
    {
      title: "Address Nickname",
      length: "10",
      type: "string",
      required: true,
    },
    {
      title: "First Line",
      length: "20",
      type: "string",
      required: true,
    },
    {
      title: "Second Line",
      length: "30",
      type: "string",
      required: true,
    },
    {
      title: "Postcode",
      length: "6",
      type: "string",
      required: true,
    },
  ];
  public images = [
    {
      url: "../assets/images/sweets-jar1.png",
      description: "sweets",
    },
    {
      url: "../assets/images/sweets-jar2.png",
      description: "sweets",
    },
    {
      url: "../assets/images/sweets-jar3.png",
      description: "sweets",
    },
    {
      url: "../assets/images/sweets-jar4.png",
      description: "sweets",
    },
    {
      url: "../assets/images/sweets-jar5.png",
      description: "sweets",
    },
    {
      url: "../assets/images/sweets-jar6.png",
      description: "sweets",
    },
    {
      url: "../assets/images/sweets-jar7.png",
      description: "sweets",
    },
    {
      url: "../assets/images/sweets-jar1.png",
      description: "sweets",
    },
  ];
  public steps = [
    { title: "Select Bag", description: "Select your bag" },
    {
      title: "Choose Sweets",
    },
    {
      title: "Delivery Address",
      description: "It will be on its way soon!",
    },
    {
      title: "Enter your information",
      description: "Just need to know who these bags are for",
    },
    {
      title: "Preview Order",
      description: "Please confirm that all the information is correct",
    },
    {
      title: "Payment",
      description: "Almost there",
    },
  ];

  @Output() modalClose: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  nextSteps() {
    this.counter++;
    console.log(this.counter);
  }

  selectOption(value) {
    this.selectedSize = value;
    this.setSweetsLimit();
  }
  setSweetsLimit() {
    this.selectedSize;
    if (this.selectedSize == "500") {
      this.sweetsLimit = 5;
    } else if (this.selectedSize == "1000") {
      this.sweetsLimit = 10;
    } else if (this.selectedSize == "2000") {
      this.sweetsLimit = 20;
    }
  }

  public modalClosed() {
    this.modalClose.emit();
  }
}

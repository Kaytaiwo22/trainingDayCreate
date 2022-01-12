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
  public images = [
    {
      url:'../assets/images/candy.png',
      description: 'sweets'
    },
    {
      url:'../assets/images/sweets.png',
      description: 'sweets'
    },  {
      url:'../assets/images/candy.png',
      description: 'sweets'
    },
    {
      url:'../assets/images/sweets.png',
      description: 'sweets'
    },  {
      url:'../assets/images/candy.png',
      description: 'sweets'
    },
    {
      url:'../assets/images/sweets.png',
      description: 'sweets'
    },  {
      url:'../assets/images/candy.png',
      description: 'sweets'
    },
    {
      url:'../assets/images/sweets.png',
      description: 'sweets'
    },
  ]
  public steps = [
    { title: "Select Bag",
      description: "Select your bag",
    },
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
  }

  public modalClosed() {
    this.modalClose.emit();
  }
}

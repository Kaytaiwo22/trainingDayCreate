import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-payment",
  templateUrl: "./payment.component.html",
  styleUrls: ["./payment.component.css"],
})
export class PaymentComponent implements OnInit {
  @Input() form: {
    title: string;
  }[] = [];

  public formArray = [
    {
      title: "Card Number",
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

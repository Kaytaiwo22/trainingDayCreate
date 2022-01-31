import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-sweet-counter-2",
  templateUrl: "./sweet-counter.component.html",
  styleUrls: ["./sweet-counter.component.css"],
})
export class SweetCounter2Component {
  @Input() image: {
    url: string;
  }[] = [];

  public url = [
    {
      url: "/assets/images/sweet-delivery1.png",
    },
    {
      url: "/assets/images/sweet-delivery1.png",
    },
    {
      url: "/assets/images/sweet-delivery1.png",
    },
    {
      url: "/assets/images/sweet-delivery1.png",
    },
    {
      url: "/assets/images/sweet-delivery1.png",
    },
    {
      url: "/assets/images/sweet-delivery1.png",
    },
    {
      url: "/assets/images/sweet-delivery1.png",
    },
    {
      url: "/assets/images/sweet-delivery1.png",
    },
  ];

  constructor() {}
}

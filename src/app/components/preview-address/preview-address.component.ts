import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-preview-address",
  templateUrl: "./preview-address.component.html",
  styleUrls: ["./preview-address.component.css"],
})
export class PreviewAddressComponent {
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

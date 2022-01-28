import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-view-items",
  templateUrl: "./view-items.component.html",
  styleUrls: ["./view-items.component.css"],
})
export class ViewItemsComponent implements OnInit {
  @Input() images: {
    url: string;
  }[] = [];

  public url = [
    {
      url: "/assets/images/view-product.png",
      bestSeller: true,
      vegan: true,
    },
    {
      url: "assets/images/view-product2.png",
      bestSeller: false,
      vegan: true,
    },
    {
      url: "assets/images/view-product3.png",
      bestSeller: false,
      vegan: false,
    },
  ];

  @Output() togglePopUp: EventEmitter<void> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  openPopUp() {
    this.togglePopUp.emit();
  }
}

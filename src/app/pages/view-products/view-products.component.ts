import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-view-products",
  templateUrl: "./view-products.component.html",
  styleUrls: ["./view-products.component.css"],
})
export class ViewProductsComponent implements OnInit {
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
      url: "assets/images/view-product.png",
      bestSeller: true,
      vegan: true,
    },
    {
      url: "assets/images/view-product.png",
      bestSeller: true,
      vegan: true,
    },
    {
      url: "assets/images/view-product.png",
      bestSeller: true,
      vegan: true,
    },
  ];
  @Output() togglePopUp2: EventEmitter<void> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  openPopUp2() {
    this.togglePopUp2.emit();
  }
  closeModal(image) {
    image.open = false;
    console.log(image);
  }
}

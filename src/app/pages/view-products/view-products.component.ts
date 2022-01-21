import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-view-products",
  templateUrl: "./view-products.component.html",
  styleUrls: ["./view-products.component.css"],
})
export class ViewProductsComponent implements OnInit {
  public images = [
    {
      url: "assets/images/container.png",
    },
  ];
  @Output() togglePopUp2: EventEmitter<void> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  openPopUp2() {
    this.togglePopUp2.emit();
  }
}

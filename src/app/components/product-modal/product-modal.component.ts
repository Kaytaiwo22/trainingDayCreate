import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-product-modal",
  templateUrl: "./product-modal.component.html",
  styleUrls: ["./product-modal.component.scss"],
})
export class ProductModalComponent {
  @Output() modalClose: EventEmitter<void> = new EventEmitter();
  constructor() {}

  public modalClosed() {
    this.modalClose.emit();
  }
}

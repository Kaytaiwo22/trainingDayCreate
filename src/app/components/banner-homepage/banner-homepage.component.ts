import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-banner-homepage",
  templateUrl: "./banner-homepage.component.html",
  styleUrls: ["./banner-homepage.component.scss"],
})
export class BannerComponent implements OnInit {
  @Output() togglePopUp: EventEmitter<void> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  openPopUp() {
    this.togglePopUp.emit();
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-sweets-grid",
  templateUrl: "./sweets-grid.component.html",
  styleUrls: ["./sweets-grid.component.scss"],
})
export class SweetsGridComponent implements OnInit {
  @Output() togglePopUp: EventEmitter<void> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  openPopUp() {
    this.togglePopUp.emit();
  }
}

import { Component } from "@angular/core";
import { TaggingService } from "../../containers/main/tagging.service";

@Component({
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent {
  public togglePopUp: boolean;
  public togglePopUp2: boolean;

  constructor(private taggingService: TaggingService) {
    this.taggingService.setAllTags("Just Pick n Mix", "Sweets for you!");
  }

  openPopUp() {
    this.togglePopUp = !this.togglePopUp;
  }

  close() {
    this.togglePopUp = true;
  }

  openPopUp2() {
    this.togglePopUp2 = !this.togglePopUp2;
  }

  close2() {
    this.togglePopUp2 = true;
  }
}

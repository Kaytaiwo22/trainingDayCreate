import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-banner-homepage",
  templateUrl: "./banner-homepage.component.html",
  styleUrls: ["./banner-homepage.component.scss"],
})
export class BannerComponent implements OnInit {
  constructor() {
    console.log("loaded");
  }

  ngOnInit(): void {}
}

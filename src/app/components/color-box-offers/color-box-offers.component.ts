import { Component } from "@angular/core";

@Component({
  selector: "app-color-box-offers",
  templateUrl: "./color-box-offers.component.html",
  styleUrls: ["./color-box-offers.component.css"],
  inputs: [
    "sweetDescription",
    "sweetButtonTxt",
    "sweetImgUrl",
    "cupcakeDescription",
    "cupcakeButtonTxt",
    "cupcakeImgUrl",
    "cookieDescription",
    "cookieButtonTxt",
    "cookieImgUrl",
    "hamperDescription",
    "hamperButtonTxt",
    "hamperImgUrl",
  ],
})
export class ColorBoxOffersComponent {
  public sweetDescription: string;
  public sweetButtonTxt: string;
  public sweetImgUrl: string;

  public cupcakeDescription: string;
  public cupcakeButtonTxt: string;
  public cupcakeImgUrl: string;

  public cookieDescription: string;
  public cookieButtonTxt: string;
  public cookieImgUrl: string;

  public hamperDescription: string;
  public hamperButtonTxt: string;
  public hamperImgUrl: string;

  public height: string;
  public width: string;

  constructor() {}
}

import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-sub-header",
  templateUrl: "./sub-header.component.html",
  styleUrls: ["./sub-header.component.css"],
})
export class SubHeaderComponent {
  public menuItems = [
    {
      text: "Jackets",
      link: "/shop",
      queryParams: { categoryId: "603827b2fca4d1002277853c" },
    },
    {
      text: "Trousers",
      link: "/shop",
      queryParams: { categoryId: "6038189dd7248b00223660d5" },
    },
    {
      text: "Dresses",
      link: "/shop",
      queryParams: { categoryId: "60381ec4c8e84d00221b1048" },
    },
    {
      text: "skirts",
      link: "/shop",
      queryParams: { categoryId: "604f5e61692ac10022052d00" },
    },
    {
      text: "T-Shirts",
      link: "/shop",
      queryParams: { categoryId: "60380b70d7248b002236605a" },
    },
    {
      text: "Tops",
      link: "/shop",
      queryParams: { categoryId: "6058d3167e46050022416ecd" },
    },
    {
      text: "jeans",
      link: "/shop",
      queryParams: { categoryId: "6038451f39907300227ba9ed" },
    },
    {
      text: "Hoodies",
      link: "/shop",
      queryParams: { categoryId: "607589ff3d86eb0022e0cd87" },
    },
    {
      text: "Nightwear",
      link: "/shop",
      queryParams: { categoryId: "60354b4884f419002253606b" },
    },
    {
      text: "Tunikas",
      link: "/shop",
      queryParams: { categoryId: "6038368afca4d10022778584" },
    },
  ];
  public smallItems = [
    {
      text: "Shop Now",
      link: "/catalog",
    },
  ];

  public currentCategory: {
    name: string;
    description: string;
  };
  public categories: {
    description: string;
    name: string;
    websiteID: string;
    __v: number;
    _id: string;
  }[] = [];

  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {
    this.getCategories();
  }

  getCategories() {
    this.http
      .get(
        "https://api2.createdigitalsolutions.com/websites/60dafcc14b162471912edc48/categories"
      )
      .subscribe(
        (categories: {
          result: {
            description: string;
            name: string;
            websiteID: string;
            __v: number;
            _id: string;
          }[];
        }) => {
          categories.result.forEach((category, index) => {
            if (index < 10) {
              this.categories.push(category);
            }
          });
        }
      );
  }
}

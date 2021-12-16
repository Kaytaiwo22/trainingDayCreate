import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-sweets-categories",
  templateUrl: "./sweets-categories.component.html",
  styleUrls: ["./sweets-categories.component.scss"],
})
export class SweetsCategoriesComponent implements OnInit {
  categoryList: any = [];

  constructor() {
    this.categoryList = [
      {
        categoryTitle: "Test",
        categoryDescription: "Description",
        imageUrl: "assets/images/30day.png",
        target: "category/#",
      },
      {
        categoryTitle: "Test",
        categoryDescription: "Description",
        imageUrl: "assets/images/30day.png",
        target: "category/#",
      },
      {
        categoryTitle: "Test",
        categoryDescription: "Description",
        imageUrl: "assets/images/30day.png",
        target: "category/#",
      },
      {
        categoryTitle: "Test",
        categoryDescription: "Description",
        imageUrl: "assets/images/30day.png",
        target: "category/#",
      },
    ];
  }

  ngOnInit(): void {}
}

import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.css"],
})
export class CategoryComponent implements OnInit {
  public categoryItems: {
    _id: string;
    name: string;
    selected?: boolean;
  }[];

  public queryId: string;
  isRefine: boolean;

  /**List Arrays**/
  categoryList = [];
  selectedCategoryItems = [];
  categorySettings = {};
  /**List Arrays**/
  sizeList = [];
  selectedSizeItems = [];
  sizeSettings = {};
  /**List Arrays**/
  sortByList = [];
  selectedSortByItems = [];
  sortBySettings = {};
  categoryFilter = "/shop";

  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((queryParams) => {
      this.queryId = queryParams.categoryId;
    });

    // this.http
    //     .get(
    //         "https://api2.createdigitalsolutions.com/websites/60dafcc14b162471912edc48/categories"
    //     )
    //     .subscribe(
    //         (categories: {
    //           result: {
    //             _id: string;
    //             name: string;
    //             description: string;
    //           }[];
    //         }) => {
    //           this.categoryItems = categories.result;
    //           this.getCategoryOptions();
    //         }
    //     );

    this.getSizeOptions();
    this.getSortByOptions();
  }

  getCategoryOptions() {
    this.categoryList = [];
    this.categoryItems.forEach((categoryItem, categoryIndex) => {
      this.categoryList.push({
        id: categoryIndex + 1,
        itemName: categoryItem.name
      });
    });

    this.categorySettings = {
      singleSelection: true,
      text: "Category",
      enableSearchFilter: true,
      classes: "myclass selectionFields",
      maxHeight: "10px",
    };
  }

  getSizeOptions() {
    this.sizeList = [
      { id: 1, itemName: "Small" },
      { id: 2, itemName: "Medium" },
      { id: 3, itemName: "Large" },
      { id: 4, itemName: "X-Large" },
    ];

    this.sizeSettings = {
      singleSelection: true,
      text: "Size",
      enableSearchFilter: false,
      classes: "myclass selectionFields",
    };
  }
  getSortByOptions() {
    this.sortByList = [
      { id: 1, itemName: "We Recommend" },
      { id: 2, itemName: "Price(Low to High)" },
      { id: 3, itemName: "Price(High to Low)" },
      { id: 4, itemName: "Newest In" },
      { id: 5, itemName: "Most Popular" },
    ];

    this.selectedSortByItems = [{ id: 1, itemName: "We Recommend" }];

    this.sortBySettings = {
      singleSelection: true,
      text: "Sort By",
      enableSearchFilter: false,
      classes: "myclass selectionFields",
    };
  }

  showFilters() {
    this.isRefine = true;
  }
  onItemSelect(item: any) {
    this.categoryItems.forEach((categoryItem) => {
      if (item.itemName === categoryItem.name) {
        this.router.navigate(['/shop'], {
          queryParams: {
            categoryId: categoryItem._id,
          },
        });
      }
    });
  }
  OnItemDeSelect(item: any) {
    console.log(item);
    console.log(this.selectedCategoryItems);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  onDeSelectAll(items: any) {
    console.log(items);
  }
}

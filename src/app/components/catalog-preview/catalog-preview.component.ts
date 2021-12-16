import { Component, Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CookieService } from "ngx-cookie-service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-catalog-preview",
  templateUrl: "./catalog-preview.component.html",
  styleUrls: ["./catalog-preview.component.css"],
  // inputs: ['height', 'width', 'imageUrl'],
})
export class CatalogPreviewComponent {
  public imageUrl: string;
  public height: string;
  public width: string;
  @Input() products: {
    options: {
      name: string;
      price: number;
      descriptions: string;
      imageUrls: string[];
      quantityAvailable: number;
      _id: string;
    }[];
    _id: string;
    categoryId: string;
    productName: string;
    deleted: boolean;
    websiteID: string;
  }[] = [];

  public currentCategory: {
    name: string;
    description: string;
  };
  trouserCategory: string;
  jacketCategory: string;
  shirtCategory: string;
  shapewearCategory: string;
  skirtsCategory: string;
  hoodiesCategory: string;
  topsCategory: string;
  jeansCategory: string;
  dressesCategory: string;
  leggingsCategory: string;
  tunikasCategory: string;
  public queryId: string;
  public categories: {
    description: string;
    name: string;
    websiteID: string;
    __v: number;
    _id: string;
    mainImage?: string;
  }[];

  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private cookieService: CookieService,
    private router: Router
  ) {
    this.jeansCategory = "6038451f39907300227ba9ed";
    this.shapewearCategory = "60354b4884f419002253606b";
    this.shirtCategory = "60380b70d7248b002236605a";
    this.hoodiesCategory = "607589ff3d86eb0022e0cd87";
    this.topsCategory = "6058d3167e46050022416ecd";
    this.jacketCategory = "603827b2fca4d1002277853c";
    this.trouserCategory = "6038189dd7248b00223660d5";
    this.dressesCategory = "60381ec4c8e84d00221b1048";
    this.skirtsCategory = "604f5e61692ac10022052d00";
    this.leggingsCategory = "6038478739907300227baa20";
    this.tunikasCategory = "6038368afca4d10022778584";

    this.activatedRoute.queryParams.subscribe((queryParams) => {
      this.queryId = queryParams.categoryId;
    });
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
              this.categories = categories.result;
              this.categories.forEach((category, index) => {
                this.http.get(
                    'https://api2.createdigitalsolutions.com/websites/60dafcc14b162471912edc48/products?categoryId=' +
                    category._id).subscribe((productForCategory: any) => {
                      if (productForCategory.result.length &&
                          productForCategory.result[0].options.length &&
                          productForCategory.result[0].options[0].imageUrls.length) {
                        this.categories[index].mainImage = productForCategory.result[0].options[0].imageUrls[0];
                      } else {
                        //Defualt image here
                        this.categories[index].mainImage = '/assets/images/modelingImage.jpeg';
                      }
                });
              });
            }
        );
  }

}

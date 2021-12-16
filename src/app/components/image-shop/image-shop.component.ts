import {Component, Input} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-image-shop',
  templateUrl: './image-shop.component.html',
  styleUrls: ['./image-shop.component.css'],
  inputs: ['height', 'width', 'imageUrl'],
})
export class ImageShopComponent {

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
  jeansCategory: string;
  shapewearCategory: string;
  shirtCategory: string;
  hoodiesCategory: string;
  jacketCategory: string;

  constructor(  private http: HttpClient,
                private activatedRoute: ActivatedRoute,
                private cookieService: CookieService,
                private router: Router) {
    this.jeansCategory = '6038451f39907300227ba9ed';
    this.shapewearCategory = '60354b4884f419002253606b';    this.shirtCategory = '60380b70d7248b002236605a';    this.hoodiesCategory = '6038368afca4d10022778584';
    this.jacketCategory = '603827b2fca4d1002277853c';

  }

}

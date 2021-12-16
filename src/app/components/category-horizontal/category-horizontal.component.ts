import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-category-horizontal',
  templateUrl: './category-horizontal.component.html',
  styleUrls: ['./category-horizontal.component.css'],
})
export class CategoryHorizontalComponent {
  public categoryItems: {
    _id: string;
    name: string;
    selected?: boolean;
  }[];

  public queryId: string;

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(queryParams => {
      this.queryId = queryParams.categoryId;
    });

    this.http.get('https://api2.createdigitalsolutions.com/websites/5fc8b88c4a963931074481fd/categories').subscribe(
        (categories: {
          result: {
            _id: string;
            name: string;
            description: string;
          }[];
        }) => {
          this.categoryItems = categories.result;
        }
    );
  }
}

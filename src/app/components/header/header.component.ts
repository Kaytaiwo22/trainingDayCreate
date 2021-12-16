import { Component, OnDestroy, OnInit } from "@angular/core";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  isSearchBar: boolean;
  public searchForm: FormGroup;
  public queryId: string;
  public search: string;
  constructor(public route: Router) {}

  ngOnInit() {}

  openSearchBar() {
    this.isSearchBar = true;
  }
  makeSearch() {
    this.route.navigate(['/shop'], { queryParams: { searchTerm: this.search } });
  }
}

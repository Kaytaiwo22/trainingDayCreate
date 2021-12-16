import {Component, Input} from '@angular/core';
import {UserDetailsService} from "../../../user-details.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-myAccount',
  templateUrl: './myAccount.component.html',
  styleUrls: ['./myAccount.component.css'],
})
export class MyAccountComponent {

  @Input() imageUrl = './assets/images/dessert.jpg';
  search = true;
  constructor() {}
}

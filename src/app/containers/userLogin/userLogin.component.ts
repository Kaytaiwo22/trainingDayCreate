import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-userLogin',
  templateUrl: './userLogin.component.html',
  styleUrls: ['./userLogin.component.css'],
})
export class UserLoginComponent {

  @Input() imageUrl = './assets/images/dessert.jpg';
  search = true;
  constructor() {}
}

import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-userRegister',
  templateUrl: './userRegister.component.html',
  styleUrls: ['./userRegister.component.css'],
})
export class UserRegisterComponent {

  @Input() imageUrl = './assets/images/dessert.jpg';
  search = true;
  constructor() {}
}

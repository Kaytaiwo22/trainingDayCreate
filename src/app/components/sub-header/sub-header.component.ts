import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.css'],
})
export class SubHeaderComponent {

  @Input() noGradient?: boolean;

  public menuItems = [
    {
      text: 'Home',
      link: '/',
    },
    {
      text: 'About',
      link: '/about-us',
    },
    // {
    //   text: 'Why us?',
    //   link: '/why',
    // },
    {
      text: 'Order Online',
      link: '/shop'
    },
    // {
    //   text: 'Shop Wax Melts',
    //   link: '/shop',
    //   queryParams: { categoryId: '5f3681c1c459650022a717e4' },
    // },
    {
      text: 'Contact Us',
      link: '/contact',
    },
  ];

  constructor() {}
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  public burgerMenuOpen: boolean = false;
  public menuInteractionStarted: boolean = false;
    public menuItems = [
        {
            text: 'Home',
            link: '/',
        },
        {
            text: 'About',
            link: '/about',
        },
        // {
        //   text: 'Why us?',
        //   link: '/why',
        // },
        {
            text: 'Order Online',
            link: '/shop',
            queryParams: { categoryId: '5f3947077397fc00227c3abf' },
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


  constructor() { }

  toggleMenu() {
    this.menuInteractionStarted = true;
    this.burgerMenuOpen = !this.burgerMenuOpen;
  }

}

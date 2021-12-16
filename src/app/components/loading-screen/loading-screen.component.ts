import {Component, Input, OnInit} from '@angular/core';

export enum SplashAnimationType {
  SlideLeft = "slide-left",
  SlideRight = "slide-right",
  FadeOut = "fade-out"
}

@Component({
  selector: 'app-loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.scss']
})
export class LoadingScreenComponent {
  loaderText: string;

  @Input() solidBackground?: boolean;

  constructor() {
    let currentIndex = 0;
    let possibleText = ['...bear with us...', '...sorry this is taking longer than usual...', 'Working on it...'];
    this.loaderText = 'Working on it...';

    setInterval(() => {
      this.loaderText = possibleText[currentIndex];
      currentIndex++;
    }, 5000);
  }
}

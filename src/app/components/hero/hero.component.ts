import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  inputs: ['header', 'mainTypeText', 'typeText', 'footer', 'imageUrl',
      'backgroundColor', 'backgroundPosition', 'buttonText', 'buttonLink',
      'textColor', 'halfSize', 'hideDownArrow', 'textAlign']
})
export class HeroComponent implements OnInit {

  public header: string;
  public footer: string;
  public imageUrl: string;
  public backgroundPosition: string;
  public mainTypeText: string;
  public buttonText?: string;
  public buttonLink?: string;
  public backgroundColor?: string;
  public textColor?: string;
  public halfSize?: boolean;
  public hideDownArrow?: boolean;
  public textAlign?: string;

  private typeText: [string];
  private period: number = 2000;

  constructor() {}

  ngOnInit() {
    this.startTypeWriterAnimation();
  }

  startTypeWriterAnimation() {
    const self = this;
    let toRotate, el, loopNum, period, txt, isDeleting;

    const tick = function() {
      const i = loopNum % toRotate.length;
      const fullTxt = toRotate[i];

      if (isDeleting) {
        txt = fullTxt.substring(0, txt.length - 1);
      } else {
        txt = fullTxt.substring(0, txt.length + 1);
      }

      el.innerHTML = '<span class="wrap">' + txt + '</span>';

      let delta = 200 - Math.random() * 100;

      if (isDeleting) { delta /= 2; }

      if (!isDeleting && txt === fullTxt) {
        delta = period;
        isDeleting = true;
      } else if (isDeleting && txt === '') {
        isDeleting = false;
        loopNum++;
        delta = 500;
      }

      setTimeout(function() {
        tick();
      }, delta);
    };

    const TxtType = function(elValue, toRotateValue, periodValue) {
      toRotate = toRotateValue;
      el = elValue;
      loopNum = 0;
      period = parseInt(periodValue, 8) || 2000;
      txt = '';
      tick();
      isDeleting = false;
    };

    const elements = document.getElementsByClassName('typewrite');
    for (let i = 0; i < elements.length; i++) {
      toRotate = self.typeText;
      period = self.period;
      if (toRotate) {
        new TxtType(elements[i], toRotate, period);
      }
    }
    // INJECT CSS
    const css: any = document.createElement('style');
    css.type = 'text/css';
    css.innerHTML = '.typewrite > .wrap { border-right: 0.08em solid #CE4C74}';
    document.body.appendChild(css);
  }



}

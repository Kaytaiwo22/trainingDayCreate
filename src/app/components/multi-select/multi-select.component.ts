import {Component, OnChanges, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.css'],
  inputs: ['options'],
  encapsulation: ViewEncapsulation.None
})
export class MultiSelectComponent implements OnChanges {

  public options: {
    mainTitle: string;
    shortDescription: string;
    headlinePrice: string;
    sectionTitle: string;
    fullDetails?: string;
    showFrom?: boolean;
  }[];

  public mediumClassName: string;

  public selectedOption: number;

  constructor() {

  }

  ngOnChanges() {
    this.mediumClassName = 'medium-' + (12 / this.options.length).toString();
    if (this.options && this.options.length && this.options[0].fullDetails) {
      this.selectedOption = 0;
    }
  }

}

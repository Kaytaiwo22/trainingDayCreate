import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.css']
})
export class StepsComponent implements OnInit {

  public steps: {
    title: string;
    description: string;
  }[]

  constructor() { }

  ngOnInit(): void {
    this.setupSteps();
  }

  setupSteps() {
    this.steps.push(
      {title: "Select Bag Size", description: "We say the bigger the better!"},
      {title: "Fill It Up", description: "Select up to 10 items for your bag"},
    );
  }
}

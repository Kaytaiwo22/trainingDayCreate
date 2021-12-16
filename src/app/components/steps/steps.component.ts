import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.css']
})
export class StepsComponent implements OnInit {

  public currentStep: boolean;
  counter = 0;
  public steps= [
      {title: "Select Bag Size", description: "We say the bigger the better!"},
    {title: "Fill It Up", description: "Select up to 10 items for your bag"},
    {title: "Fill in delivery details", description: "It will be on its way soon!"},]

  constructor() { }

  ngOnInit(): void {

  }

  nextSteps() {
    this.counter++;
  }

}

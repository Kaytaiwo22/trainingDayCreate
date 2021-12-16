import { Component } from '@angular/core';

@Component({
  selector: 'app-call2action',
  templateUrl: './call2action.component.html',
  styleUrls: ['./call2action.component.css'],
  inputs: ['header', 'footer', 'buttonUrl', 'buttonText'],
})
export class Call2actionComponent {

  public header: string;
  public footer: string;
  public buttonUrl: string;
  public buttonText: string;

  constructor() { }

}

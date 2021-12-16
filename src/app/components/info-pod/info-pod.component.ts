import { Component } from '@angular/core';

@Component({
  selector: 'app-info-pod',
  templateUrl: './info-pod.component.html',
  styleUrls: ['./info-pod.component.css'],
  inputs: ['header', 'paragraph', 'imageUrl', 'buttonText', 'buttonLink', 'imageRight'],
})
export class InfoPodComponent {

  public header: string;
  public paragraph: string;
  public imageUrl: string;
  public buttonText: string;
  public buttonLink: string;
  public imageRight: boolean;

  constructor() { }

}

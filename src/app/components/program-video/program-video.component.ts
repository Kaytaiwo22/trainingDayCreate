import { Component } from '@angular/core';

@Component({
  selector: 'app-program-video',
  templateUrl: './program-video.component.html',
  styleUrls: ['./program-video.component.css'],
  inputs: ['header', 'videoUrl'],
})
export class ProgramVideoComponent {

  public header: string;
  public videoUrl: string;
  constructor() { }

}

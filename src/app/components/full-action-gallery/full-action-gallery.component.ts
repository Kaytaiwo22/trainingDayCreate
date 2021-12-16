import {Component, Inject, OnInit} from '@angular/core';
import {AosToken} from "../animate-on-scroll/aos";

@Component({
  selector: 'app-full-action-gallery',
  templateUrl: './full-action-gallery.component.html',
  styleUrls: ['./full-action-gallery.css'],
  inputs: ['header', 'items'],
})
export class FullActionGalleryComponent implements OnInit {

  public header: string;
  public items: {
    title: string;
    imageUrl: string;
    buttonText?: string;
    buttonLink?: string;
  }[];

  constructor() {
  }

  ngOnInit() {
  }
}

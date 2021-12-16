import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-cluster',
  templateUrl: './image-cluster.component.html',
  styleUrls: ['./image-cluster.css'],
  inputs: ['imageUrls', 'imageAltText'],
})
export class ImageClusterComponent implements OnInit {

  public imageUrls: string[];
  public imageAltText: string[];

  constructor() { }

  ngOnInit() {
  }
}

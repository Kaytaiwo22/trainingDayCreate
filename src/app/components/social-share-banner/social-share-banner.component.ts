import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-share-banner',
  templateUrl: './social-share-banner.component.html',
  styleUrls: ['./social-share-banner.component.css'],
  inputs: ['shareableText'],
})
export class SocialShareBannerComponent implements OnInit {

  public shareableText: string;

  constructor() { }

  ngOnInit(): void {
  }

}

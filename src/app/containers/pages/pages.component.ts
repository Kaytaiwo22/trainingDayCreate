import {Component, Inject, ViewContainerRef, ViewEncapsulation} from '@angular/core';
import {AosToken} from "../../components/animate-on-scroll/aos";
import {ActivatedRoute} from "@angular/router";
import {TaggingService} from "../main/tagging.service";
import {PagesService} from './pages.service';

@Component({
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PagesComponent {

  public slug: string;

  constructor(private taggingService: TaggingService, @Inject(AosToken) aos, private route: ActivatedRoute, private pagesService: PagesService, private viewContainerRef: ViewContainerRef) {
      console.log('pages')
    aos.init();
    this.route.params.subscribe((routeParams) => {
      if (routeParams.slug) {
        this.slug = '/' + routeParams.slug;
      } else {
          this.slug = '/';
      }

      this.setupPageDynamically(this.slug);
    });
  }

  private setupPageDynamically(slug) {
    this.viewContainerRef.clear();
    this.pagesService.getPage(slug).subscribe((page: { result: {
        _id?: string;
        isLive?: boolean;
        pageDescription?: string;
        pageTitle?: string;
        populatedComponents?: {
            componentID?: string;
            params?: object;
        }[];
        urlSlug?: string;
        websiteID?: string;
    }}) => {

      this.pagesService.setRootViewContainerRef(this.viewContainerRef);

      // Cycle through the data and add the components to the DOM
      page.result.populatedComponents.forEach((component: {
          componentID?: string;
          params?: object;
      }) => {
        this.pagesService.addDynamicComponent(component.componentID, component.params);
      });

      this.taggingService.setAllTags(
        page.result.pageTitle,
        page.result.pageDescription,
        ''
      );
    });
  }

}

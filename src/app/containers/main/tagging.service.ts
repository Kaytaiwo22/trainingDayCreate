import {Meta, Title} from "@angular/platform-browser";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class TaggingService {

  constructor(private title: Title, private meta: Meta) {}

  setAllTags(pageTitle: string, description: string, pageImage?: string, pageType?: string) {

    if (!pageImage) {
      pageImage = 'https://jamesthesleepcoach.com/assets/images/james-og-image.png';
    }

    if (!pageType) {
      pageType = 'website';
    }

    this.title.setTitle(pageTitle + ' | James The Sleep Coach');

    this.meta.updateTag({ name: 'description', content: description });

    this.meta.updateTag({ property: 'og:title', content: pageTitle });

    this.meta.updateTag({ property: 'og:description', content: description });

    this.meta.updateTag({ property: 'og:image', content: pageImage });

    this.meta.updateTag({ property: 'og:type', content: pageType });

    this.meta.updateTag({ property: 'og:url', content: 'https://jamesthesleepcoach.com' + window.location.pathname });
  }
}

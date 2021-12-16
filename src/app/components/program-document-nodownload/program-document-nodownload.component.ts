import {Component, OnChanges, OnInit} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-program-document-nodownload',
  templateUrl: './program-document-nodownload.component.html',
  styleUrls: ['./program-document-nodownload.component.css'],
  inputs: ['documentUrl', 'header'],
})
export class ProgramDocumentNodownloadComponent  implements OnChanges, OnInit {

  public documentUrl: string;
  public header: string;
  urlSafe: SafeResourceUrl;

  constructor(public sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.documentUrl + '#toolbar=0');

  }

  ngOnChanges() {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.documentUrl+ '#toolbar=0');
  }
}

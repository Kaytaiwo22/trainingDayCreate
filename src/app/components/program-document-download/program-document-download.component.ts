import {Component, OnChanges, OnInit} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-program-document-download',
  templateUrl: './program-document-download.component.html',
  styleUrls: ['./program-document-download.component.css'],
  inputs: ['documentUrl', 'header'],
})
export class ProgramDocumentDownloadComponent implements OnChanges, OnInit{

  public documentUrl: string;
  public header: string;
  urlSafe: SafeResourceUrl;

  constructor(public sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.documentUrl);

  }

  ngOnChanges() {
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.documentUrl);
  }




}

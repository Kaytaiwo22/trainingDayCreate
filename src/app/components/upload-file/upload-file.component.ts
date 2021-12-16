import {Component, Inject, Input, OnInit} from '@angular/core';
import {DomSanitizer, SafeResourceUrl, SafeUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit{

  @Input() buttonText: string;
  @Input() buttonUrl: string;
  @Input() videoUrl: string;
  uploadfile : string;

  safeSrc: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {

  }

  ngOnInit() {
    // this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+ this.videoUrl);
    //
    // console.log('https://www.youtube.com/embed/'+ this.videoUrl);
  }

  downloadFile(fileUrl) {
    window.location.href = fileUrl;
  }

}

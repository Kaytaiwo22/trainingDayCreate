import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {UserDetailsService} from "../../../user-details.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  inputs: ['height', 'width', 'imageUrl'],
})
export class AccountComponent implements OnInit {
  public email: FormControl = new FormControl('', {
    validators: Validators.compose([Validators.required, Validators.pattern(/^.*$/)]),
  });
  public firstName: FormControl = new FormControl('', {
    validators: Validators.compose([Validators.required, Validators.pattern(/^.*$/)]),
  });
  public lastName: FormControl = new FormControl('', {
    validators: Validators.compose([Validators.required, Validators.pattern(/^.*$/)]),
  });
  public password: FormControl = new FormControl('', {
    validators: Validators.compose([Validators.required, Validators.pattern(/^.*$/)]),
  });
  public mailingAllowed: FormControl = new FormControl('', {
    validators: Validators.compose([Validators.required, Validators.pattern(/^.*$/)]),
  });
  public editForm: FormGroup;
  public editError?: string;

  // public userDetails: {
  //   firstName: string;
  //   lastName: string;
  //   email: string;
  //   password?: string;
  //   mailingAllowed: boolean;
  //   role?: string;
  // };
  public userDetails: any;
  bookMeeting: boolean;
  public imageUrl: string;
  public height: string;
  public width: string;

  editProfile: boolean;
  history: boolean;
  empty: boolean;
  @Input() favourites: boolean;
  // name = 'Set iframe source';
  url = '/programme-feed';
  urlSafe: SafeResourceUrl;
  sleepOption: string;

  constructor(
    private formBuilder: FormBuilder,
    public router: Router,
    private http: HttpClient,
    public sanitizer: DomSanitizer,
    private cookieService: CookieService,
    private activatedRoute: ActivatedRoute,
) {
    this.editForm = this.formBuilder.group({
      email: this.email,
      password: this.password,
    });

    this.setupUserDetails();
  }

  ngOnInit() {
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    this.checkState(this.empty);
    this.activatedRoute.queryParams.subscribe((queryParams) => {
      if (queryParams.favourites) {
        this.checkState('favourites');
      } else {
        this.checkState('');
      }
    });
  }

  setupUserDetails() {
    this.http.post('https://api2.createdigitalsolutions.com/clientAccounts/60dafcc14b162471912edc48/authenticate/refreshToken', {}).subscribe((authenticatedResponse: any) => {
      this.cookieService.set('auth', authenticatedResponse.result.token, 5, '/');
      this.http.get('https://api2.createdigitalsolutions.com/clientAccount/60dafcc14b162471912edc48').subscribe(
        (userDetails: {
          result: {
          };
        }) => {
          this.userDetails = userDetails.result;
          this.sleepOption = this.userDetails.roles.find(role => role.type === 'SleepProgram2') ? 'Sleep Program 2' : 'Sleep Program 1'
          this.email.setValue(this.userDetails.email);
          this.firstName.setValue(this.userDetails.firstName);
          this.lastName.setValue(this.userDetails.lastName);
          this.mailingAllowed.setValue(this.userDetails.mailingAllowed);
        },
        () => {
          this.router.navigate(['/']);
        }
      );
    });
  }



  checkState(state) {
    if (state === 'edit') {
      this.editProfile = true;
      this.empty = false;
      this.history = false;
      this.favourites = false;
    } else if (state === 'history') {
      this.history = true;
      this.editProfile = false;
      this.empty = false;
      this.favourites = false;
    } else if (state === 'favourites') {
      this.history = false;
      this.editProfile = false;
      this.empty = false;
      this.favourites = true;
    } else {
      state = 'empty';
      this.empty = true;
      this.history = false;
      this.editProfile = false;
      this.favourites = false;
    }
    window.scrollTo(0, 0);
  }

  updateUser() {
    const requestObject: {
      email?: string;
      password?: string;
    } = {};

    if (this.email.value) {
      requestObject.email = this.email.value;
    }
    if (this.password.value) {
      requestObject.password = this.password.value;
    }

    this.http.put('https://api2.createdigitalsolutions.com/clientAccounts/60dafcc14b162471912edc48/authenticate', requestObject).subscribe(
      () => {
        // this.setupUserDetails();
        this.checkState('');
      },
      () => {
        this.editError = 'Sorry, something went wrong. Please try again.';
      }
    );
  }

  logout() {
    this.cookieService.delete('auth');
    this.router.navigate(['/']);
  }

  meetingSelection(){
    this.bookMeeting = true;
  }
  close(){
    this.bookMeeting = false;
  }
}

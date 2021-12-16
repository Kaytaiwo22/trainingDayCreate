 import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  @Input() isLogin: boolean;
  @Output() modalClose: EventEmitter<void> = new EventEmitter();

  public email: FormControl = new FormControl("", {
    validators: Validators.compose([
      Validators.required, Validators.email,
      // Validators.pattern(/^.*$/),
    ]),
  });
  public password: FormControl = new FormControl("", {
    validators: Validators.compose([
      Validators.required,
      Validators.pattern(/^.*$/),
    ]),
  });
  public loginForm: FormGroup;
  public error?: string;
  public redirectUrl?: string;
  submitButton : boolean = true;
  formSubmitted = false;
  public userDetails: {
    email: string;
    password: string;
    websiteID: string;
    roles?: string[];
    firstName: string;
    lastName: string;
    phoneNumber?: string;
    addressLine1?: string;
    addressLine2?: string;
    addressLine3?: string;
    postCode?: string;
    gender?: string;
    marketingAllowed: boolean;
  }[];

  constructor(
      private formBuilder: FormBuilder,
      public router: Router,
      private http: HttpClient,
      private cookieService: CookieService,
      private activatedRoute: ActivatedRoute
  ) {
    this.loginForm = this.formBuilder.group({
      email: this.email,
      password: this.password,
    });

    this.redirectUrl = this.activatedRoute.snapshot.queryParams.redirectUrl;
  }

  ngOnInit() {}

  login() {
    this.isLogin = true;
  }

  isEnter(event) {
    if (event.code === 'Enter') {
      this.submitLogin();
    }
  }

  submitLogin() {
    this.error = null;
    this.http
      .post('https://api2.createdigitalsolutions.com/clientAccounts/60dafcc14b162471912edc48/authenticate', {
        email: this.email.value,
        password: this.password.value,
      })
      .subscribe(
        (authenticatedResponse: { result: { token: string; roles: string[]; } }) => {
          this.cookieService.set('auth', authenticatedResponse.result.token, 5, '/');
          if (
            this.activatedRoute.snapshot.queryParams.redirectUrl &&
            this.activatedRoute.snapshot.queryParams.redirectUrl.substring(0, 1) === '/'
          ) {
            window.location.href = this.activatedRoute.snapshot.queryParams.redirectUrl;
          } else {
            this.router.navigate(['/account']);
          }
        },
        () => {
          this.error = "Sorry, those details don't match our records. Please try again";
        }
      );
  }

  onSubmit(event) {
    event.preventDefault();
    this.submitLogin();
    // if (this.registerForm.valid) {
    //   this.formSubmitted = true;
    //   alert("Registration");
    //   this.submitRegistration();
    //   console.log(this.registerForm.value); // Process your form
    // } else if (this.registerForm.invalid) {
    //   this.formSubmitted = false;
    //   alert("Error");
    // }
  }
}

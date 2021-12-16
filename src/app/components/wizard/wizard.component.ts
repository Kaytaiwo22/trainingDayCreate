import { Component, ChangeDetectorRef, EventEmitter, Input, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss'],
})
export class WizardComponent {
  @Input() beachDetails: any;
  public title: FormControl = new FormControl('', {
    validators: Validators.compose([Validators.required, Validators.pattern(/^.*$/)]),
  });
  public other: FormControl = new FormControl('', {
    validators: Validators.compose([Validators.required, Validators.pattern(/^.*$/)]),
  });
  public firstName: FormControl = new FormControl('', {
    validators: Validators.compose([Validators.required, Validators.pattern(/^.*$/)]),
  });
  public lastName: FormControl = new FormControl('', {
    validators: Validators.compose([Validators.required, Validators.pattern(/^.*$/)]),
  });
  public starRating: FormControl = new FormControl('', {
    validators: Validators.compose([Validators.required, Validators.pattern(/^.*$/)]),
  });
  public review: FormControl = new FormControl('', {
    validators: Validators.compose([Validators.required,Validators.minLength(50), Validators.pattern(/^.*$/)]),
  });
  public type: FormControl = new FormControl('', {
    validators: Validators.compose([Validators.required, Validators.pattern(/^.*$/)]),
  });
  public beachType: FormControl = new FormControl('', {
    validators: Validators.compose([Validators.required, Validators.pattern(/^.*$/)]),
  });
  public cleanliness: FormControl = new FormControl('', {
    validators: Validators.compose([Validators.required, Validators.pattern(/^.*$/)]),
  });
  public waterTemperature: FormControl = new FormControl('', {
    validators: Validators.compose([Validators.required, Validators.pattern(/^.*$/)]),
  });
  public fileUpload: FormControl = new FormControl('', {
    validators: Validators.compose([Validators.required, Validators.pattern(/^.*$/)]),
  });
  public monthSelected: FormControl = new FormControl('', {
    validators: Validators.compose([Validators.required, Validators.pattern(/^[0-9]{2}\/[0-9]{4}$/)]),
  });
  public activitiesSelected: FormControl = new FormControl('', {
    validators: Validators.compose([Validators.required, Validators.pattern(/^.*$/)]),
  });
  public reviewForm: FormGroup;
  public facilities?: string[] = [];
  public beachRestrictions?: string[] = [];
  public beachActivities?: string[] = [];
  public restrictions = [
    {
      item: 'No Pets',
      icon: 'assets/images/icons/pets.svg',
    },
    {
      item: 'Nude beach',
      icon: 'assets/images/icons/woman-bikini.svg',
    },
    {
      item: 'No Smoking',
      icon: 'assets/images/icons/smoking.svg',
    },
    {
      item: 'No Camping',
      icon: 'assets/images/icons/camping.svg',
    },
    {
      item: 'No Fishing',
      icon: 'assets/images/icons/fish.svg',
    },
    {
      item: 'No Drinking',
      icon: 'assets/images/icons/localbar.svg',
    },
    {
      item: 'No Barbeque',
      icon: 'assets/images/icons/grill.svg',
    },
  ];
  public activitiesAvailable = [
    {
      item: 'Yoga/Meditation',
      icon: 'assets/images/icons/yoga.svg',
    },
    {
      item: 'Fitness/Gym',
      icon: 'assets/images/icons/fitness.svg',
    },
    {
      item: 'Surfing',
      icon: 'assets/images/icons/surf.svg',
    },
    {
      item: 'Kite Surfing',
      icon: 'assets/images/icons/kitesurf.svg',
    },
    {
      item: 'Kayaking',
      icon: 'assets/images/icons/kayak.svg',
    },
    {
      item: 'Diving',
      icon: 'assets/images/icons/oxygen.svg',
    },
    {
      item: 'Cruises',
      icon: 'assets/images/icons/boat.svg',
    },
    {
      item: 'Snorkeling',
      icon: 'assets/images/icons/diving-googles.svg',
    },
    {
      item: 'Playground',
      icon: 'assets/images/icons/child.svg',
    },
    {
      item: 'Volleyball',
      icon: 'assets/images/icons/volleyball.svg',
    },
    {
      item: 'Basketball',
      icon: 'assets/images/icons/basketball.svg',
    },
    {
      item: 'Soccer',
      icon: 'assets/images/icons/soccer.svg',
    },
  ];
  public facilityList = [
    {
      item: 'Toilets',
      icon: 'assets/images/icons/wc.svg',
    },
    {
      item: 'Accessible toilets',
      icon: 'assets/images/icons/awc.svg',
    },
    {
      item: 'Changing rooms',
      icon: 'assets/images/icons/change.svg',
    },
    {
      item: 'showers',
      icon: 'assets/images/icons/shower.svg',
    },
    {
      item: 'Sunbeds',
      icon: 'assets/images/icons/sunbed.svg',
    },
    {
      item: 'Umbrellas',
      icon: 'assets/images/icons/beach.svg',
    },
    {
      item: 'Water sports',
      icon: 'assets/images/icons/surf.svg',
    },
    {
      item: 'Outdoor gym',
      icon: 'assets/images/icons/gym.svg',
    },
    {
      item: 'Supermarket',
      icon: 'assets/images/icons/shopping.svg',
    },
    {
      item: 'Bike parking ',
      icon: 'assets/images/icons/bike.svg',
    },
    {
      item: 'Volleyball court',
      icon: 'assets/images/icons/volleyball.svg',
    },
    {
      item: 'Kids Playground',
      icon: 'assets/images/icons/child.svg',
    },
    {
      item: 'Emergency services',
      icon: 'assets/images/icons/emergency.svg',
    },
    {
      item: 'Trash Bin',
      icon: 'assets/images/icons/recycling.svg',
    },
    {
      item: 'lifeguarded',
      icon: 'assets/images/icons/support.svg',
    },
    {
      item: 'Parking',
      icon: 'assets/images/icons/parking.svg',
    },
    {
      item: 'Bars',
      icon: 'assets/images/icons/localbar.svg',
    },
    {
      item: 'First Aid Service',
      icon: 'assets/images/icons/first-aid-kit.svg',
    },
    {
      item: 'Restaurants',
      icon: 'assets/images/icons/fork.svg',
    },
    {
      item: 'Hotels',
      icon: 'assets/images/icons/hotel2.svg',
    },
    {
      item: 'Accessible showers',
      icon: 'assets/images/icons/awcShower.svg',
    },
  ];
  public beachTypeList = [
    {
      item: 'Sandy',
      icon: 'assets/images/icons/sand.png',
    },
    {
      item: 'Rocky',
      icon: 'assets/images/icons/rock.png',
    },
    {
      item: 'Glass',
      icon: 'assets/images/icons/glass.png',
    },
    {
      item: 'Caves',
      icon: 'assets/images/icons/cave.png',
    },
    {
      item: 'Seashells',
      icon: 'assets/images/icons/shell.png',
    },
    {
      item: 'Urban',
      icon: 'assets/images/icons/urban.png',
    },
  ];
  public temperature = [
    {
      item: 'Freezing',
      icon: 'assets/images/icons/cold.png',
    },
    {
      item: 'Cold',
      icon: 'assets/images/icons/snowflake.png',
    },
    {
      item: 'Moderate Warm',
      icon: 'assets/images/icons/sweat.png',
    },
    {
      item: 'Pleasant Warm',
      icon: 'assets/images/icons/thermometer.png',
    },
    {
      item: 'Hot',
      icon: 'assets/images/icons/sun.png',
    },
    {
      item: 'Really Hot',
      icon: 'assets/images/icons/hot.png',
    },
    {
      item: 'Boiling',
      icon: 'assets/images/icons/hotsprings.png',
    },
  ];
  public clean = [
    {
      item: 'Clean',
      icon: 'assets/images/icons/happy.svg',
    },
    {
      item: 'Moderate Clean',
      icon: 'assets/images/icons/neutral.svg',
    },
    {
      item: 'Dirty',
      icon: 'assets/images/icons/sad.svg',
    },
  ];
  public months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  isVerified: boolean;
  stars: number[] = [1, 2, 3, 4, 5];
  toggleState: boolean;
  tentativeStarRating: number;
  public descriptionLength = new BehaviorSubject(0);
  @Input() showWizard: boolean;
  partOne = true;
  termsConfirmed: boolean;
  termsUnconfirmed: boolean;

  selectedactivities: string;
  public errorMessage: boolean;

  @Output() modalClose: EventEmitter<void> = new EventEmitter();

  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private changeDetectorRef: ChangeDetectorRef
  ) {

    this.reviewForm = this.formBuilder.group({
      title: this.title,
      other: this.other,
      firstName: this.firstName,
      lastName: this.lastName,
      review: this.review,
      starRating: this.starRating,
      type: this.type,
      cleanliness: this.cleanliness,
      waterTemperature: this.waterTemperature,
      fileUpload: this.fileUpload,
      monthSelected: this.monthSelected,
      beachType: this.beachType,
    });

    this.http.get('https://globebeaches-api.herokuapp.com/account').subscribe(
      (userDetails: {
        result: {
          firstName: string;
          lastName: string;
          email: string;
          password?: string;
          mailingAllowed: boolean;
          role?: string;
        };
      }) => {
        this.firstName.setValue(userDetails.result.firstName);
        this.lastName.setValue(userDetails.result.lastName);
      },
      () => {
        // this.router.navigate(['/login']);
      }
    );
  }

  saveStarRating() {
    if (!this.starRating.value) {
      this.starRating.setValue(this.tentativeStarRating);
    }
  }

  countStar(star) {
    this.tentativeStarRating = star;
  }

  get getControl(){
    return this.reviewForm.controls;
  }

  nextStep() {
    this.partOne = false;
    // window.scrollTo(0, 0);

    Object.keys(this.reviewForm.controls).forEach(key => {
      const controlErrors: ValidationErrors = this.reviewForm.get(key).errors;
      if(controlErrors != null) {
        Object.keys(controlErrors).forEach(keyError => {
          window.scrollTo(0, 0);
        });
      }
    });
  }
  scrollUp(){
    window.scrollTo(0, 0);
    this.errorMessage= true;
  }

  backStep() {
    this.partOne = true;
    window.scrollTo(0, 0);
  }

  updateOption(optionReference, $event) {
    if ($event.target.checked) {
      if (optionReference.indexOf($event.target.value) === -1) {
        optionReference.push($event.target.value);
      }
    } else {
      if (optionReference.indexOf($event.target.value) !== -1) {
        optionReference.splice(optionReference.indexOf($event.target.value), 1);
      }
    }
  }

  closeModal() {
    this.modalClose.emit();
  }

  confirmTerms(){
    this.termsConfirmed = true;
  }

  finishReview() {
    if(this.termsConfirmed) {
      this.http
        .post('https://globebeaches-api.herokuapp.com/review', {
          lng: Number(this.activatedRoute.snapshot.queryParams.long),
          lat: Number(this.activatedRoute.snapshot.queryParams.lat),
          reviewTitle: this.title.value,
          firstName: this.firstName.value,
          lastName: this.lastName.value,
          review: this.review.value,
          starRating: parseInt(this.starRating.value, 10),
          monthAttended: this.monthSelected.value,
          facilities: this.facilities,
          beachType: this.beachType.value,
          cleanliness: this.cleanliness.value,
          waterTemperature: this.waterTemperature.value,
          beachRestrictions: this.beachRestrictions,
          beachActivities: this.beachActivities,
        })
        .subscribe(() => {
          window.location.reload();
        });
    } else {
      this.termsUnconfirmed = true;
    }
  }

  selectActivityOptions(option) {
    this.selectedactivities = option;
    console.log(option);
  }

  saveOption() {
    this.facilityList.forEach((value) => {
      if (this.facilityList) {
        this.facilityList[0].item.valueOf();
        console.log(this.facilityList[0].item);
      }
    });
  }
}

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactBannerComponent } from './contact-banner.component';

describe('WhoAreYouComponent', () => {
  let component: ContactBannerComponent;
  let fixture: ComponentFixture<ContactBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

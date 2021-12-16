import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialShareBannerComponent } from './social-share-banner.component';

describe('SocialShareBannerComponent', () => {
  let component: SocialShareBannerComponent;
  let fixture: ComponentFixture<SocialShareBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialShareBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialShareBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

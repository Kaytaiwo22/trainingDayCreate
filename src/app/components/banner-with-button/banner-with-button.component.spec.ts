import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {BannerWithButtonComponent} from './banner-with-button.component';

describe('BannerWithButtonComponent', () => {
  let component: BannerWithButtonComponent;
  let fixture: ComponentFixture<BannerWithButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerWithButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerWithButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

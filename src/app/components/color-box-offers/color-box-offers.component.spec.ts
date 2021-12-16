import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {ColorBoxOffersComponent} from './color-box-offers.component';

describe('ColorBoxOffersComponent', () => {
  let component: ColorBoxOffersComponent;
  let fixture: ComponentFixture<ColorBoxOffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorBoxOffersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorBoxOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

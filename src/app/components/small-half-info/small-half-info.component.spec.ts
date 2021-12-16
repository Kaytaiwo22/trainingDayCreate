import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SmallHalfInfoComponent} from "./small-half-info.component";

describe('HalfInfoComponent', () => {
  let component: SmallHalfInfoComponent;
  let fixture: ComponentFixture<SmallHalfInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallHalfInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallHalfInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {HalfInfoComponent} from "./half-info.component";

describe('HalfInfoComponent', () => {
  let component: HalfInfoComponent;
  let fixture: ComponentFixture<HalfInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HalfInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HalfInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

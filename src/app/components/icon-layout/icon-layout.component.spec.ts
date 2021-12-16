import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {IconLayoutComponent} from "./icon-layout.component";

describe('HomeComponent', () => {
  let component: IconLayoutComponent;
  let fixture: ComponentFixture<IconLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

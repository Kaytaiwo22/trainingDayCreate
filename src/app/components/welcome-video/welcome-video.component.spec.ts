import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {WelcomeVideoComponent} from './image.component';

describe('ImageComponent', () => {
  let component: WelcomeVideoComponent;
  let fixture: ComponentFixture<WelcomeVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

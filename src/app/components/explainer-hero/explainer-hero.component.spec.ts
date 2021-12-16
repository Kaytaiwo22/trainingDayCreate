import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {ExplainerHeroComponent} from "./explainer-hero.component";

describe('HomeComponent', () => {
  let component: ExplainerHeroComponent;
  let fixture: ComponentFixture<ExplainerHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExplainerHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplainerHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

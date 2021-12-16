import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {ServicesHeroComponent} from './services-hero.component';

describe('ServicesComponent', () => {
  let component: ServicesHeroComponent;
  let fixture: ComponentFixture<ServicesHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

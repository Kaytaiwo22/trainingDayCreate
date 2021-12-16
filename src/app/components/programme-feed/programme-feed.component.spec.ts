import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {ProgrammeFeedComponent} from "./info-tile.component";

describe('HalfInfoComponent', () => {
  let component: ProgrammeFeedComponent;
  let fixture: ComponentFixture<ProgrammeFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgrammeFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammeFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

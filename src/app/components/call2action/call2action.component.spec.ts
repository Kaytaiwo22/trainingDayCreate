import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Call2actionComponent} from './call2action.component';

describe('Call2actionComponent', () => {
  let component: Call2actionComponent;
  let fixture: ComponentFixture<Call2actionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Call2actionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Call2actionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

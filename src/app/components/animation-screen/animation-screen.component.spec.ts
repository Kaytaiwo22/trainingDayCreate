import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationScreenComponent } from './animation-screen.component';

describe('AnimationScreenComponent', () => {
  let component: AnimationScreenComponent;
  let fixture: ComponentFixture<AnimationScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimationScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {FullWidthImageComponent} from './image.component';

describe('ImageComponent', () => {
  let component: FullWidthImageComponent;
  let fixture: ComponentFixture<FullWidthImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullWidthImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullWidthImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

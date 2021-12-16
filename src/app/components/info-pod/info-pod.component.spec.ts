import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {InfoPodComponent} from "./info-pod.component";

describe('HalfInfoComponent', () => {
  let component: InfoPodComponent;
  let fixture: ComponentFixture<InfoPodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoPodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

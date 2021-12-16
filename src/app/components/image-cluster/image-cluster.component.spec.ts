import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {ImageClusterComponent} from "./image-cluster.component";

describe('HomeComponent', () => {
  let component: ImageClusterComponent;
  let fixture: ComponentFixture<ImageClusterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageClusterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageClusterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

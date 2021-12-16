import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {FullActionGalleryComponent} from "./full-action-gallery.component";

describe('HomeComponent', () => {
  let component: FullActionGalleryComponent;
  let fixture: ComponentFixture<FullActionGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullActionGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullActionGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

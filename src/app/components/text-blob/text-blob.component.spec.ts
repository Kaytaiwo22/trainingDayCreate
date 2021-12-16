import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBlobComponent } from './blog-text.component';

describe('BlogTextComponent', () => {
  let component: TextBlobComponent;
  let fixture: ComponentFixture<TextBlobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextBlobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextBlobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

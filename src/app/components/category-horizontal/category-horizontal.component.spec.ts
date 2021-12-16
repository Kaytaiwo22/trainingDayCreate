import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryHorizontalComponent } from './category-horizontal.component';

describe('CategoryHorizontalComponent', () => {
  let component: CategoryHorizontalComponent;
  let fixture: ComponentFixture<CategoryHorizontalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryHorizontalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

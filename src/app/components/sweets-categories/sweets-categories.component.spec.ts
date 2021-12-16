import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SweetsCategoriesComponent } from './sweets-categories.component';

describe('SweetsCategoriesComponent', () => {
  let component: SweetsCategoriesComponent;
  let fixture: ComponentFixture<SweetsCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SweetsCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SweetsCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

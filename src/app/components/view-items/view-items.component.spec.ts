import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ViewItemsComponent } from "./view-items.component";

describe("ViewProductsComponent", () => {
  let component: ViewItemsComponent;
  let fixture: ComponentFixture<ViewItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewItemsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

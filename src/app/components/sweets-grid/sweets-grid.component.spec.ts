import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SweetsGridComponent } from "./sweets-grid.component";

describe("SweetsGridComponent", () => {
  let component: SweetsGridComponent;
  let fixture: ComponentFixture<SweetsGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SweetsGridComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SweetsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

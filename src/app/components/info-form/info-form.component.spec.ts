import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { InfoFormComponent } from "./info-form.component";

describe("HeaderComponent", () => {
  let component: InfoFormComponent;
  let fixture: ComponentFixture<InfoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InfoFormComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

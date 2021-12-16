import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {ProductDisplayCardComponent} from "./product-card.component";

describe('ProductCardComponent', () => {
  let component: ProductDisplayCardComponent;
  let fixture: ComponentFixture<ProductDisplayCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDisplayCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDisplayCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

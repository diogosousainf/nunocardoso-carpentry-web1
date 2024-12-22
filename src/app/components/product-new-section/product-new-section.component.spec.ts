import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductNewSectionComponent } from './product-new-section.component';

describe('ProductNewSectionComponent', () => {
  let component: ProductNewSectionComponent;
  let fixture: ComponentFixture<ProductNewSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductNewSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductNewSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

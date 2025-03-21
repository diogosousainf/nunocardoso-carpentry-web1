import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProductOldVsNewComponent } from './new-product-old-vs-new.component';

describe('NewProductOldVsNewComponent', () => {
  let component: NewProductOldVsNewComponent;
  let fixture: ComponentFixture<NewProductOldVsNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewProductOldVsNewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewProductOldVsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

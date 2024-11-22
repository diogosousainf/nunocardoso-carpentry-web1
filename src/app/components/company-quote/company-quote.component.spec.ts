import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyQuoteComponent } from './company-quote.component';

describe('CompanyQuoteComponent', () => {
  let component: CompanyQuoteComponent;
  let fixture: ComponentFixture<CompanyQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyQuoteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

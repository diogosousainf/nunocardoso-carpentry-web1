import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralCarpentryComponent } from './general-carpentry.component';

describe('GeneralCarpentryComponent', () => {
  let component: GeneralCarpentryComponent;
  let fixture: ComponentFixture<GeneralCarpentryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneralCarpentryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralCarpentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

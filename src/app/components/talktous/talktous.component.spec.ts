import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalktousComponent } from './talktous.component';

describe('TalktousComponent', () => {
  let component: TalktousComponent;
  let fixture: ComponentFixture<TalktousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TalktousComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TalktousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

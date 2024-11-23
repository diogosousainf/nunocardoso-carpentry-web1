import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoheroComponent } from './videohero.component';

describe('VideoheroComponent', () => {
  let component: VideoheroComponent;
  let fixture: ComponentFixture<VideoheroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoheroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoheroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

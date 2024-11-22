import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WardrobesComponent } from './wardrobes.component';

describe('WardrobesComponent', () => {
  let component: WardrobesComponent;
  let fixture: ComponentFixture<WardrobesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WardrobesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WardrobesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DifferentialA11yComponent } from './differential-a11y.component';

describe('DifferentialA11yComponent', () => {
  let component: DifferentialA11yComponent;
  let fixture: ComponentFixture<DifferentialA11yComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DifferentialA11yComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DifferentialA11yComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

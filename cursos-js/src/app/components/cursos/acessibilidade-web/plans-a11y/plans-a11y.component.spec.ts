import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansA11yComponent } from './plans-a11y.component';

describe('PlansA11yComponent', () => {
  let component: PlansA11yComponent;
  let fixture: ComponentFixture<PlansA11yComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlansA11yComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlansA11yComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

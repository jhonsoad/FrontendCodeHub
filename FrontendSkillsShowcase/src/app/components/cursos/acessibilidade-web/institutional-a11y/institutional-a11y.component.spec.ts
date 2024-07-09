import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionalA11yComponent } from './institutional-a11y.component';

describe('InstitutionalA11yComponent', () => {
  let component: InstitutionalA11yComponent;
  let fixture: ComponentFixture<InstitutionalA11yComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstitutionalA11yComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstitutionalA11yComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

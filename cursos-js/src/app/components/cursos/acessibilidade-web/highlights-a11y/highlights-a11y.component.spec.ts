import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightsA11yComponent } from './highlights-a11y.component';

describe('HighlightsA11yComponent', () => {
  let component: HighlightsA11yComponent;
  let fixture: ComponentFixture<HighlightsA11yComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HighlightsA11yComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HighlightsA11yComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightA11yComponent } from './highlight-a11y.component';

describe('HighlightA11yComponent', () => {
  let component: HighlightA11yComponent;
  let fixture: ComponentFixture<HighlightA11yComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HighlightA11yComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HighlightA11yComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

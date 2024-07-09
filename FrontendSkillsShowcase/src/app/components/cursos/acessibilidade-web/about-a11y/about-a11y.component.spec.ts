import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutA11yComponent } from './about-a11y.component';

describe('AboutA11yComponent', () => {
  let component: AboutA11yComponent;
  let fixture: ComponentFixture<AboutA11yComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutA11yComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutA11yComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterA11yComponent } from './footer-a11y.component';

describe('FooterA11yComponent', () => {
  let component: FooterA11yComponent;
  let fixture: ComponentFixture<FooterA11yComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterA11yComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterA11yComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

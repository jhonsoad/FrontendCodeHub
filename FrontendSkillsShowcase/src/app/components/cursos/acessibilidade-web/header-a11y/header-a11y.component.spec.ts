import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderA11yComponent } from './header-a11y.component';

describe('HeaderA11yComponent', () => {
  let component: HeaderA11yComponent;
  let fixture: ComponentFixture<HeaderA11yComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderA11yComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderA11yComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

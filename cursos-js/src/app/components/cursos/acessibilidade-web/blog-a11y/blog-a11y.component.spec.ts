import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogA11yComponent } from './blog-a11y.component';

describe('BlogA11yComponent', () => {
  let component: BlogA11yComponent;
  let fixture: ComponentFixture<BlogA11yComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogA11yComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogA11yComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

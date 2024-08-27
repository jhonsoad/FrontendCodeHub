import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactA11yComponent } from './contact-a11y.component';

describe('ContactA11yComponent', () => {
  let component: ContactA11yComponent;
  let fixture: ComponentFixture<ContactA11yComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactA11yComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactA11yComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

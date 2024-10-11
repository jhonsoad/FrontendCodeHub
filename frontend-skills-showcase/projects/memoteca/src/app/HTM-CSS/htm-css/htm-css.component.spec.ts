import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmCssComponent } from './htm-css.component';

describe('HtmCssComponent', () => {
  let component: HtmCssComponent;
  let fixture: ComponentFixture<HtmCssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmCssComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

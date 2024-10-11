import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsManipulandoODOMComponent } from './js-manipulando-o-dom.component';

describe('JsManipulandoODOMComponent', () => {
  let component: JsManipulandoODOMComponent;
  let fixture: ComponentFixture<JsManipulandoODOMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JsManipulandoODOMComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JsManipulandoODOMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

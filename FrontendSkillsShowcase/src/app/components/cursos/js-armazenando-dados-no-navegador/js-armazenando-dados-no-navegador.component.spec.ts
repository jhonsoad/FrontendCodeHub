import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsArmazenandoDadosNoNavegadorComponent } from './js-armazenando-dados-no-navegador.component';

describe('JsArmazenandoDadosNoNavegadorComponent', () => {
  let component: JsArmazenandoDadosNoNavegadorComponent;
  let fixture: ComponentFixture<JsArmazenandoDadosNoNavegadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JsArmazenandoDadosNoNavegadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JsArmazenandoDadosNoNavegadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

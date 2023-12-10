import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsCriePaginasDinamicasComponent } from './js-crie-paginas-dinamicas.component';

describe('JsCriePaginasDinamicasComponent', () => {
  let component: JsCriePaginasDinamicasComponent;
  let fixture: ComponentFixture<JsCriePaginasDinamicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JsCriePaginasDinamicasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JsCriePaginasDinamicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

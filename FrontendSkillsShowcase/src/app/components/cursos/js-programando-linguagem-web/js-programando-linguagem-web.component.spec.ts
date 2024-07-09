import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsProgramandoLinguagemWebComponent } from './js-programando-linguagem-web.component';

describe('JsProgramandoLinguagemWebComponent', () => {
  let component: JsProgramandoLinguagemWebComponent;
  let fixture: ComponentFixture<JsProgramandoLinguagemWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JsProgramandoLinguagemWebComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JsProgramandoLinguagemWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

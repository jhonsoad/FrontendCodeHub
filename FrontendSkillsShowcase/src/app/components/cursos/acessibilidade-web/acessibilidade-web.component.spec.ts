import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcessibilidadeWebComponent } from './acessibilidade-web.component';

describe('AcessibilidadeWebComponent', () => {
  let component: AcessibilidadeWebComponent;
  let fixture: ComponentFixture<AcessibilidadeWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcessibilidadeWebComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcessibilidadeWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

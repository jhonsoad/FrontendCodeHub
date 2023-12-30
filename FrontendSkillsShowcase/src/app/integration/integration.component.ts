import { Component } from '@angular/core';
import { AcessibilidadeWebComponent } from '../cursos/acessibilidade-web/acessibilidade-web.component';

@Component({
  selector: 'app-integration',
  standalone: true,
  imports: [ AcessibilidadeWebComponent, ],
  templateUrl: './integration.component.html',
  styleUrl: './integration.component.scss'
})
export class IntegrationComponent {

}

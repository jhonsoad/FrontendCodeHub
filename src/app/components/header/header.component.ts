import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, AsyncPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private authService = inject(AuthService);

  /** Observable boolean — true quando o usuário tem um Access Token válido */
  readonly isAuthenticated$ = this.authService.accessToken$.pipe(
    map((token) => token !== null),
  );
}

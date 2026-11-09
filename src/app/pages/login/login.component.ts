/// <reference types="google.accounts" />
import { Component, afterNextRender, inject } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-login',
  imports: [HeaderComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private authService = inject(AuthService);

  constructor() {
    // afterNextRender só executa no navegador, após o DOM estar completamente montado
    afterNextRender(() => {
      this.authService.initTokenClient();
    });
  }

  login(): void {
    this.authService.login();
  }
}

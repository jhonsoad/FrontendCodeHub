/// <reference types="google.accounts" />
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../../environments/environment';
import { UtilsService } from '../utils-service/utils.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly GSI_SCRIPT_URL = 'https://accounts.google.com/gsi/client';
  private readonly TASKS_SCOPE = 'https://www.googleapis.com/auth/tasks.readonly';

  private utilsService = inject(UtilsService);

  private _accessToken = new BehaviorSubject<string | null>(null);

  /** Observable do access token — componentes se inscrevem para reagir ao login/logout */
  readonly accessToken$ = this._accessToken.asObservable();

  /** Valor síncrono do access token atual */
  get accessToken(): string | null {
    return this._accessToken.value;
  }

  get isAuthenticated(): boolean {
    return this._accessToken.value !== null;
  }

  private tokenClient: google.accounts.oauth2.TokenClient | null = null;

  /**
   * Carrega o script GSI dinamicamente e inicializa o Token Client.
   * Deve ser chamado uma única vez, no componente de login (após o DOM estar pronto).
   */
  initTokenClient(): void {
    // Injeta o script GSI no <head> de forma lazy (só quando necessário)
    this.utilsService.adicionaLinkTag('preconnect', 'https://accounts.google.com');

    const scriptId = 'google-gsi-script';

    if (document.getElementById(scriptId)) {
      // Script já foi injetado anteriormente; inicializa diretamente
      this.createTokenClient();
      return;
    }

    const script = document.createElement('script');
    script.id = scriptId;
    script.src = this.GSI_SCRIPT_URL;
    script.async = true;
    script.defer = true;
    script.onload = () => this.createTokenClient();
    script.onerror = () => console.error('AuthService: falha ao carregar o script GSI do Google.');
    document.head.appendChild(script);
  }

  /** Abre o popup de consentimento do Google para obter o Access Token */
  login(): void {
    if (!this.tokenClient) {
      console.error('AuthService: Token Client não foi inicializado. Chame initTokenClient() primeiro.');
      return;
    }
    this.tokenClient.requestAccessToken();
  }

  /** Descarta o token atual (logout local — não revoga no Google) */
  logout(): void {
    this._accessToken.next(null);
  }

  private createTokenClient(): void {
    if (typeof google === 'undefined' || !google.accounts?.oauth2) {
      console.error('AuthService: biblioteca do Google Identity Services não disponível.');
      return;
    }

    this.tokenClient = google.accounts.oauth2.initTokenClient({
      client_id: environment.googleClientId,
      scope: this.TASKS_SCOPE,
      callback: (response) => {
        if (response.error) {
          console.error('AuthService: erro na autorização do Google:', response);
          return;
        }
        this._accessToken.next(response.access_token);
      },
    });
  }
}


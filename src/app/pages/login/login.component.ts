/// <reference types="google.accounts" />
import { Component, inject, afterNextRender } from '@angular/core';
import { Task, TaskService } from '../../services/task/task.service';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-login',
  imports: [HeaderComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  accessToken: string | null = null;
  tasks: Task[] = [];

  private taskService = inject(TaskService);

  constructor() {
    // afterNextRender só executa no navegador e DEPOIS que o DOM foi totalmente montado
    afterNextRender(() => {
      this.initGoogleLogin();
    });
  }

  initGoogleLogin() {
    let attempts = 0;
    const maxAttempts = 30; // Aguarda até 3 segundos pelo carregamento do script/DOM

    const render = () => {
      const googleBtn = document.getElementById('google-btn');

      if (typeof window !== 'undefined' && 'google' in window && googleBtn) {
        google.accounts.id.initialize({
          client_id: 'SEU_CLIENT_ID_OAUTH.apps.googleusercontent.com',
          callback: (response: google.accounts.id.CredentialResponse) => this.handleCredentialResponse(response),
        });

        google.accounts.id.renderButton(googleBtn, {
          type: 'standard',
          theme: 'outline',
          size: 'large',
        });
      } else if (attempts < maxAttempts) {
        attempts++;
        setTimeout(render, 100);
      } else {
        console.warn('Não foi possível inicializar o botão do Google: script ou elemento #google-btn não encontrado.');
      }
    };

    render();
  }

  handleCredentialResponse(response: google.accounts.id.CredentialResponse) {
    // Nota: Para a API de Tasks, o ideal é usar o fluxo de Access Token (Token Client)
    // do Google Identity Services, pois o ID Token (JWT) padrão do botão às vezes
    // precisa ser trocado por um Access Token no backend.
    // *Dica rápida*: O Google recomenda o `google.accounts.oauth2.initTokenClient`
    // para obter o Access Token diretamente para APIs de escopo privado como o Tasks.

    console.log('Token recebido:', response);
    // Aqui você armazena o token e libera a consulta
  }

  loadTasks() {
    if (!this.accessToken) return;

    this.taskService.getTasks(this.accessToken).subscribe({
      next: (data) => {
        this.tasks = data;
      },
      error: (err) => {
        console.error('Erro ao buscar tarefas:', err);
      },
    });
  }
}

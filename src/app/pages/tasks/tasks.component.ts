import { Component, afterNextRender, inject, signal } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { BehaviorSubject, combineLatest, of } from 'rxjs';
import { catchError, finalize, switchMap } from 'rxjs/operators';
import { AuthService } from '../../services/auth/auth.service';
import { Task, TaskService } from '../../services/task/task.service';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-tasks',
  imports: [HeaderComponent, AsyncPipe, ReactiveFormsModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {
  private authService = inject(AuthService);
  private taskService = inject(TaskService);
  private fb = inject(FormBuilder);

  readonly accessToken$ = this.authService.accessToken$;
  private refresh$ = new BehaviorSubject<void>(undefined);

  readonly isLoading = signal<boolean>(false);
  readonly isSubmitting = signal<boolean>(false);
  readonly errorMessage = signal<string | null>(null);
  readonly successMessage = signal<string | null>(null);

  readonly taskForm = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(2)]],
    notes: [''],
  });

  readonly tasks$ = combineLatest([this.accessToken$, this.refresh$]).pipe(
    switchMap(([token]) => {
      if (!token) return of([]);
      this.isLoading.set(true);
      return this.taskService.getTasks(token).pipe(
        finalize(() => this.isLoading.set(false)),
        catchError((err) => {
          const message =
            err.error?.error ||
            'Falha ao carregar tarefas. Verifique sua conexão ou autenticação.';
          this.errorMessage.set(message);
          return of([]);
        })
      );
    })
  );

  constructor() {
    afterNextRender(() => {
      this.authService.initTokenClient();
    });
  }

  onCreateTask(): void {
    if (this.taskForm.invalid) {
      this.taskForm.markAllAsTouched();
      return;
    }

    const token = this.authService.accessToken;
    if (!token) {
      this.errorMessage.set('Sessão expirada. Faça login novamente.');
      return;
    }

    const { title, notes } = this.taskForm.value;
    const cleanTitle = title?.trim() || '';
    const cleanNotes = notes?.trim() || undefined;

    if (!cleanTitle) return;

    this.isSubmitting.set(true);
    this.errorMessage.set(null);
    this.successMessage.set(null);

    this.taskService
      .createTask(token, {
        title: cleanTitle,
        notes: cleanNotes,
      })
      .pipe(
        finalize(() => this.isSubmitting.set(false))
      )
      .subscribe({
        next: () => {
          this.taskForm.reset();
          this.successMessage.set('Tarefa criada com sucesso!');
          this.refresh$.next();
          setTimeout(() => this.successMessage.set(null), 4000);
        },
        error: (err) => {
          const message =
            err.error?.error || 'Erro ao criar tarefa. Tente novamente.';
          this.errorMessage.set(message);
        },
      });
  }

  login(): void {
    this.errorMessage.set(null);
    this.authService.login();
  }

  logout(): void {
    this.errorMessage.set(null);
    this.successMessage.set(null);
    this.taskForm.reset();
    this.authService.logout();
  }
}

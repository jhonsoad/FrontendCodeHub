import { Component, inject, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable, of, switchMap } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';
import { Task, TaskService } from '../../services/task/task.service';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-tasks',
  imports: [HeaderComponent, AsyncPipe],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent implements OnInit {
  private authService = inject(AuthService);
  private taskService = inject(TaskService);

  readonly accessToken$ = this.authService.accessToken$;
  tasks$: Observable<Task[]> = of([]);

  ngOnInit(): void {
    // Sempre que o accessToken mudar (login/logout), atualiza a lista de tarefas
    this.tasks$ = this.accessToken$.pipe(
      switchMap((token) => {
        if (!token) return of([]);
        return this.taskService.getTasks(token);
      }),
    );
  }

  login(): void {
    this.authService.login();
  }

  logout(): void {
    this.authService.logout();
  }
}
